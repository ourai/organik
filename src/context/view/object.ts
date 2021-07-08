import {
  ModuleContext,
  ObjectViewContextDescriptor,
  ObjectShorthandRequest,
  ObjectViewContext,
} from '../../typing';
import { createGenericViewContext, resolvePartialContext } from './base';

function createObjectViewContext<R, VT, CT>(
  moduleContext: ModuleContext<R>,
  options: ObjectViewContextDescriptor<VT, CT>,
): ObjectViewContext<R, VT, CT> {
  const ctx = {
    ...createGenericViewContext<R, VT, CT>(moduleContext, { ...options, defaultValue: {} as any }),
    ...resolvePartialContext<
      R,
      ObjectViewContextDescriptor<VT, CT>,
      ObjectViewContext<R, VT, CT>,
      keyof ObjectShorthandRequest
    >(moduleContext.execute, options, ['insert', 'update', 'getOne']),
  };

  let dataSource: VT = {} as any;
  let val: VT = {} as any;

  return {
    ...ctx,
    getDataSource: () => dataSource,
    setDataSource: (data: VT) => {
      dataSource = data;
      ctx.emit('dataChange', data);
    },
    getValue: () => val,
    setValue: (value: VT) => (val = value),
  };
}

export { createObjectViewContext };
