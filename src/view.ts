import { isFunction } from '@ntks/toolbox';

import {
  ComponentCtor,
  ModuleContext,
  GenericRenderer,
  ListViewContextDescriptor,
  ObjectViewContextDescriptor,
  ListViewContext,
  ObjectViewContext,
} from './typing';
import { getWidget } from './component';
import { createViewContext } from './context';

type MixedViewContext<R, VT, CT> = ListViewContext<R, VT, CT> | ObjectViewContext<R, VT, CT>;

type ViewProvider = { [key: string]: any };

type ViewCreator<R = any, VT = any, CT = any> = (
  context: MixedViewContext<R, VT, CT>,
  provider: ViewProvider,
  renderer: GenericRenderer,
) => ComponentCtor;

let viewCreator = (() => function () {} as ComponentCtor) as ViewCreator; // eslint-disable-line @typescript-eslint/no-empty-function

function setViewCreator<R, VT, CT>(creator: ViewCreator<R, VT, CT>): void {
  if (isFunction(creator)) {
    viewCreator = creator;
  }
}

function createView<R, VT, CT>(
  context: ModuleContext<R> | MixedViewContext<R, VT, CT>,
  options?: ListViewContextDescriptor<VT, CT> | ObjectViewContextDescriptor<VT, CT>,
  providerGetter?: () => ViewProvider,
): ComponentCtor {
  const resolved = options
    ? createViewContext(context as ModuleContext<R>, options)
    : (context as MixedViewContext<R, VT, CT>);
  const view = resolved.getView();

  let provider = { viewContext: resolved } as ViewProvider;

  if ((options as ListViewContextDescriptor<VT, CT>).search) {
    provider.searchContext = (resolved as ListViewContext<R, VT, CT>).getSearchContext();
  }

  if (isFunction(providerGetter)) {
    provider = { ...provider, ...providerGetter!() };
  }

  let renderer: GenericRenderer;

  if (isFunction(view.render)) {
    renderer = view.render as ComponentCtor;
  } else {
    renderer = getWidget(view.render as string) || view.render;
  }

  return viewCreator(resolved, provider, renderer);
}

export { setViewCreator, createView };
