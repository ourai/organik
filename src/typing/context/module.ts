import { ComponentCtor } from '../component';
import { DataValue } from '../value';
import { RequestParams, ResponseResult, ResponseSuccess, ResponseFail } from '../http';
import { ModelDescriptor, ModuleDependencies, ModuleResources } from '../metadata';

type Repository = any;

interface ModuleContextDescriptor<R extends Repository = Repository> {
  moduleName: string;
  repository: R;
  model?: ModelDescriptor;
}

type RepositoryExecutor<ActionName extends any = any, VT extends DataValue = DataValue> = {
  (actionName: ActionName, success?: ResponseSuccess<VT>, fail?: ResponseFail<VT>): Promise<
    ResponseResult<VT>
  >;
  (
    actionName: ActionName,
    params: RequestParams,
    success?: ResponseSuccess<VT>,
    fail?: ResponseFail<VT>,
  ): Promise<ResponseResult<VT>>;
};

interface ModuleContext<R> {
  getModuleName: () => string;
  getModel: () => ModelDescriptor | undefined;
  getDependencies: (refPath?: string) => ModuleDependencies | ModuleResources | undefined;
  getComponents: () => Record<string, ComponentCtor>;
  execute: RepositoryExecutor<keyof R>;
}

export { ModuleContextDescriptor, RepositoryExecutor, ModuleContext };
