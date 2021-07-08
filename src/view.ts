import { isFunction } from '@ntks/toolbox';

import {
  ComponentCtor,
  ModuleContext,
  GenericRenderer,
  ViewType,
  ListViewContextDescriptor,
  ObjectViewContextDescriptor,
  ListViewContext,
  ObjectViewContext,
} from './typing';
import { getWidget } from './component';
import { createViewContext } from './context';

type MixedViewContext<R, VT, CT> = ListViewContext<R, VT, CT> | ObjectViewContext<R, VT, CT>;

type ViewCreator<R = any, VT = any, CT = any> = (
  context: MixedViewContext<R, VT, CT>,
  renderer: GenericRenderer,
  providerGetter?: () => { [key: string]: any },
) => ComponentCtor;

let viewCreator = (() => function () {} as ComponentCtor) as ViewCreator; // eslint-disable-line @typescript-eslint/no-empty-function

function setViewCreator<R, VT, CT>(creator: ViewCreator<R, VT, CT>): void {
  if (isFunction(creator)) {
    viewCreator = creator as any;
  }
}

function createView<R, VT, CT>(
  context: ModuleContext<R> | MixedViewContext<R, VT, CT>,
  options?: ListViewContextDescriptor<VT, CT> | ObjectViewContextDescriptor<VT, CT>,
  providerGetter?: () => { [key: string]: any },
): ComponentCtor {
  const resolved = options
    ? createViewContext(context as ModuleContext<R>, options)
    : (context as MixedViewContext<R, VT, CT>);
  const view = resolved.getView();

  let renderer: GenericRenderer;

  if (isFunction(view.render)) {
    renderer = view.render as ComponentCtor;
  } else {
    renderer = getWidget(view.render as string) || view.render;
  }

  return viewCreator(resolved, renderer, providerGetter);
}

type UncertainContext<R, CTT> = ModuleContext<R> | CTT;

type UnionViewContextDescriptor<VT, CT> =
  | ListViewContextDescriptor<VT, CT>
  | ObjectViewContextDescriptor<VT, CT>;

type PartialOptions<OT> = Omit<OT, 'type' | 'render'> & {
  render?: GenericRenderer;
};

function resolveView<R, VT, CT>(
  context: UncertainContext<R, MixedViewContext<R, VT, CT>>,
  type: ViewType,
  defaultRenderer: string,
  options?: PartialOptions<UnionViewContextDescriptor<VT, CT>>,
): ComponentCtor {
  let resolved: UnionViewContextDescriptor<VT, CT> | undefined;

  if (options) {
    resolved = { render: defaultRenderer, ...options, type };
  } else {
    resolved = undefined;
  }

  return createView<R, VT, CT>(context, resolved);
}

function createTableView<R, VT, CT>(
  context: UncertainContext<R, ListViewContext<R, VT, CT>>,
  options?: PartialOptions<ListViewContextDescriptor<VT, CT>>,
): ComponentCtor {
  return resolveView<R, VT, CT>(context, 'list', 'TableView', options);
}

function createDetailView<R, VT, CT>(
  context: UncertainContext<R, ObjectViewContext<R, VT, CT>>,
  options?: PartialOptions<ObjectViewContextDescriptor<VT, CT>>,
): ComponentCtor {
  return resolveView<R, VT, CT>(context, 'object', 'DetailView', options);
}

function createFormView<R, VT, CT>(
  context: UncertainContext<R, ObjectViewContext<R, VT, CT>>,
  options?: PartialOptions<ObjectViewContextDescriptor<VT, CT>>,
): ComponentCtor {
  return resolveView<R, VT, CT>(context, 'object', 'FormView', options);
}

export { setViewCreator, createView, createTableView, createDetailView, createFormView };
