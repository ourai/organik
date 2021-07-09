import {
  ModuleContext,
  GenericRenderer,
  ViewType,
  ListViewContextDescriptor,
  ObjectViewContextDescriptor,
  ListViewContext,
  ObjectViewContext,
  createView,
} from 'organik';

import { ComponentCtor } from '../types/component';
import { ViewGetter } from '../types/view';

type UncertainContext<R, CTT> = ModuleContext<R> | CTT;

type UnionViewContextDescriptor<VT, CT> =
  | ListViewContextDescriptor<VT, CT>
  | ObjectViewContextDescriptor<VT, CT>;

type PartialOptions<OT> = Omit<OT, 'type' | 'render'> & {
  render?: GenericRenderer;
};

function resolveView<R, VT, CT>(
  context: UncertainContext<R, ListViewContext<R, VT, CT> | ObjectViewContext<R, VT, CT>>,
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

  return createView<R, VT, CT>(context, resolved) as ComponentCtor;
}

function createTableView<R, VT, CT>(
  context: UncertainContext<R, ListViewContext<R, VT, CT>>,
  options?: PartialOptions<ListViewContextDescriptor<VT, CT>>,
): ComponentCtor {
  return resolveView<R, VT, CT>(context, 'list', 'TableView', options);
}

function createTableViewGetter<R, VT, CT>(
  context: UncertainContext<R, ListViewContext<R, VT, CT>>,
  options?: PartialOptions<ListViewContextDescriptor<VT, CT>>,
): ViewGetter {
  return () => createTableView(context, options);
}

function createDetailView<R, VT, CT>(
  context: UncertainContext<R, ObjectViewContext<R, VT, CT>>,
  options?: PartialOptions<ObjectViewContextDescriptor<VT, CT>>,
): ComponentCtor {
  return resolveView<R, VT, CT>(context, 'object', 'DetailView', options);
}

function createDetailViewGetter<R, VT, CT>(
  context: UncertainContext<R, ObjectViewContext<R, VT, CT>>,
  options?: PartialOptions<ObjectViewContextDescriptor<VT, CT>>,
): ViewGetter {
  return () => createDetailView(context, options);
}

function createFormView<R, VT, CT>(
  context: UncertainContext<R, ObjectViewContext<R, VT, CT>>,
  options?: PartialOptions<ObjectViewContextDescriptor<VT, CT>>,
): ComponentCtor {
  return resolveView<R, VT, CT>(context, 'object', 'FormView', options);
}

function createFormViewGetter<R, VT, CT>(
  context: UncertainContext<R, ObjectViewContext<R, VT, CT>>,
  options?: PartialOptions<ObjectViewContextDescriptor<VT, CT>>,
): ViewGetter {
  return () => createFormView(context, options);
}

export {
  createTableView,
  createTableViewGetter,
  createDetailView,
  createDetailViewGetter,
  createFormView,
  createFormViewGetter,
};
