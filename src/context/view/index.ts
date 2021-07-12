import {
  ModuleContext,
  ListViewContextDescriptor,
  ListViewContext,
  ObjectViewContextDescriptor,
  ObjectViewContext,
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

export { createViewContext };
