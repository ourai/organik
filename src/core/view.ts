import { isFunction, capitalize } from '@ntks/toolbox';

import {
  ComponentCtor,
  DataValue,
  ConfigType,
  ModuleContext,
  ComponentRenderer,
  ListViewContextDescriptor,
  ObjectViewContextDescriptor,
  ListViewContext,
  ObjectViewContext,
} from './typing';
import { createCreator } from './creator';
import { getWidget } from './component';
import { createViewContext } from './context';

type MixedViewContext<VT, CT> = ListViewContext<VT, CT> | ObjectViewContext<VT, CT>;

type ViewProvider = { [key: string]: any };

const [getViewCreator, setViewCreator] = createCreator(
  (
    context: MixedViewContext<DataValue, ConfigType>, // eslint-disable-line @typescript-eslint/no-unused-vars
    provider: ViewProvider, // eslint-disable-line @typescript-eslint/no-unused-vars
    renderer: ComponentRenderer, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => function () {} as ComponentCtor, // eslint-disable-line @typescript-eslint/no-empty-function
);

function createView<VT, CT>(
  context: ModuleContext | MixedViewContext<VT, CT>,
  options?: ListViewContextDescriptor<VT, CT> | ObjectViewContextDescriptor<VT, CT>,
  providerGetter?: () => ViewProvider,
): ComponentCtor {
  const resolved = options
    ? createViewContext(context as ModuleContext, options)
    : (context as MixedViewContext<VT, CT>);
  const view = resolved.getView();

  let provider = { viewContext: resolved } as ViewProvider;

  if ((options as ListViewContextDescriptor<VT, CT>).search) {
    provider.searchContext = (resolved as ListViewContext<VT, CT>).getSearchContext();
  }

  if (isFunction(providerGetter)) {
    provider = { ...provider, ...providerGetter!() };
  }

  let renderer: ComponentRenderer;

  const { renderType, widget } = view;

  if (widget) {
    if (isFunction(widget)) {
      renderer = widget as ComponentCtor;
    } else {
      renderer = getWidget(widget as string) || widget;
    }
  } else {
    renderer = getWidget(`${capitalize(renderType || '')}ViewWidget`) || '';
  }

  return getViewCreator()(resolved, provider, renderer);
}

export { setViewCreator, createView };
