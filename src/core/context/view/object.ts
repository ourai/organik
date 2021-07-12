import {
  ModuleContext,
  ObjectViewContextDescriptor,
  ObjectShorthandRequest,
  ObjectViewContext,
} from '../../typing';
import { createGenericViewContext, resolvePartialContext } from './base';

function createObjectViewContext<VT, CT>(
  moduleContext: ModuleContext,
  options: ObjectViewContextDescriptor<VT, CT>,
): ObjectViewContext<VT, CT> {
  const ctx = {
    ...createGenericViewContext<VT, CT>(moduleContext, {
      ...options,
      defaultValue: {} as any,
      initialValue: options.initialValue || ({} as any),
    }),
    ...resolvePartialContext<
      ObjectViewContextDescriptor<VT, CT>,
      ObjectViewContext<VT, CT>,
      keyof ObjectShorthandRequest
    >(moduleContext.execute, options, ['insert', 'update', 'getOne']),
  };

  const indexInParent = options.indexInParent === undefined ? -1 : options.indexInParent;

  let dataSource: VT = {} as any;

  return {
    ...ctx,
    getParent: () => options.parent,
    getIndexInParent: () => indexInParent,
    getDataSource: () => dataSource,
    setDataSource: (data: VT) => {
      dataSource = data;
      ctx.emit('dataChange', data);
    },
  };
}

export { createObjectViewContext };
