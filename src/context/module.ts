import { isString, isFunction, noop } from '@ntks/toolbox';

import {
  RequestParams,
  ResponseResult,
  ResponseSuccess,
  ResponseFail,
  ModuleContextDescriptor,
  RepositoryExecutor,
  ModuleContext,
} from '../typing';
import { ensureModuleExists, getDependencies, getComponents } from '../module';

const moduleContextMap = new Map<string, ModuleContext<any>>();

function isResultLogicallySuccessful(result: ResponseResult): boolean {
  return result.success === true;
}

function createRepositoryExecutor<R>(
  repository: R,
  resultAsserter: (
    result: ResponseResult,
    actionName: keyof R,
  ) => boolean = isResultLogicallySuccessful,
): RepositoryExecutor<keyof R> {
  return async function (
    actionName: keyof R,
    params?: RequestParams | ResponseSuccess,
    success?: ResponseSuccess | ResponseFail,
    fail?: ResponseFail,
  ): Promise<ResponseResult> {
    if (!(actionName in repository)) {
      return { success: false, message: `不存在 \`${actionName}\` 这个请求资源` } as ResponseResult;
    }

    let resolvedParams: RequestParams;
    let resolvedSuccessCallback: ResponseSuccess;
    let resolvedFailCallback: ResponseFail;

    if (params && isFunction(params)) {
      resolvedParams = undefined;
      resolvedSuccessCallback = (params || noop) as ResponseSuccess;
      resolvedFailCallback = (success || noop) as ResponseFail;
    } else {
      resolvedParams = params;
      resolvedSuccessCallback = (success || noop) as ResponseSuccess;
      resolvedFailCallback = fail || noop;
    }

    const result: ResponseResult = await (repository[actionName] as any)(resolvedParams);

    if (resultAsserter(result, actionName)) {
      resolvedSuccessCallback(result.data, result.extra, result);
    } else {
      resolvedFailCallback(result.message, result);
    }

    return result;
  };
}

function constructModuleContextDescriptor(moduleName: string): ModuleContextDescriptor<any> {
  const module = ensureModuleExists(moduleName);
  const descriptor = { moduleName, repository: module.repository } as ModuleContextDescriptor<any>;

  if (module.model) {
    descriptor.model = module.model;
  }

  return descriptor;
}

function createModuleContext<R>(descriptor: ModuleContextDescriptor<R> | string): ModuleContext<R> {
  const { moduleName, repository, model } = isString(descriptor)
    ? constructModuleContextDescriptor(descriptor as string)
    : (descriptor as ModuleContextDescriptor<R>);

  if (moduleContextMap.has(moduleName)) {
    return moduleContextMap.get(moduleName) as ModuleContext<R>;
  }

  const ctx = {
    getModuleName: () => moduleName,
    getModel: () => model,
    getDependencies: getDependencies.bind(null, moduleName),
    getComponents: getComponents.bind(null, moduleName),
    execute: createRepositoryExecutor(repository),
  } as ModuleContext<R>;

  moduleContextMap.set(moduleName, ctx);

  return ctx;
}

export { createModuleContext };
