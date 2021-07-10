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

function createViewContext<VT, CT>(
  moduleContext: ModuleContext,
  options: ListViewContextDescriptor<VT, CT> | ObjectViewContextDescriptor<VT, CT>,
): ListViewContext<VT, CT> | ObjectViewContext<VT, CT> {
  return options.type === 'object'
    ? (createObjectViewContext<VT, CT>(
        moduleContext,
        options as ObjectViewContextDescriptor<VT, CT>,
      ) as ObjectViewContext<VT, CT>)
    : (createListViewContext<VT, CT>(
        moduleContext,
        options as ListViewContextDescriptor<VT, CT>,
      ) as ListViewContext<VT, CT>);
}

function resolveViewContextInAction<VC extends ViewContext = ViewContext>(
  context: VC,
): ViewContextInAction<VC> {
  const keptKeys: KeptViewContextKeysInAction[] = [
    'getModuleContext',
    'getView',
    'getValue',
    'execute',
    'on',
    'off',
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
