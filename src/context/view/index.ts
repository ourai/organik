import { omit } from '@ntks/toolbox';

import {
  ModuleContext,
  ViewContext,
  ListViewContextDescriptor,
  ListViewContext,
  ObjectViewContextDescriptor,
  ObjectViewContext,
  KeptViewContextKeysInAction,
  ViewContextInAction,
} from '../../typing';
import { createListViewContext } from './list';
import { createObjectViewContext } from './object';

function createViewContext<R, VT, CT>(
  moduleContext: ModuleContext<R>,
  options: ListViewContextDescriptor<VT, CT> | ObjectViewContextDescriptor<VT, CT>,
): ListViewContext<R, VT, CT> | ObjectViewContext<R, VT, CT> {
  return options.type === 'object'
    ? (createObjectViewContext<R, VT, CT>(
        moduleContext,
        options as ObjectViewContextDescriptor<VT, CT>,
      ) as ObjectViewContext<R, VT, CT>)
    : (createListViewContext<R, VT, CT>(
        moduleContext,
        options as ListViewContextDescriptor<VT, CT>,
      ) as ListViewContext<R, VT, CT>);
}

function resolveViewContextInAction<VC extends ViewContext = ViewContext>(
  context: VC,
): ViewContextInAction<VC> {
  const keptKeys: KeptViewContextKeysInAction[] = [
    'getModuleContext',
    'getView',
    'getValue',
    'execute',
    'reload',
    'getList',
    'deleteOne',
    'deleteList',
  ];

  return omit(
    context,
    Object.keys(context).filter(key => keptKeys.indexOf(key as any) === -1),
  );
}

export { createViewContext, resolveViewContextInAction };
