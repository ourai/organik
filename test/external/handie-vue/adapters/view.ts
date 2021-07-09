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
import { VueConstructor } from 'vue';

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
): VueConstructor {
  let resolved: UnionViewContextDescriptor<VT, CT> | undefined;

  if (options) {
    resolved = { render: defaultRenderer, ...options, type };
  } else {
    resolved = undefined;
  }

  return createView<R, VT, CT>(context, resolved) as VueConstructor;
}

function createTableView<R, VT, CT>(
  context: UncertainContext<R, ListViewContext<R, VT, CT>>,
  options?: PartialOptions<ListViewContextDescriptor<VT, CT>>,
): VueConstructor {
  return resolveView<R, VT, CT>(context, 'list', 'TableView', options);
}

function createDetailView<R, VT, CT>(
  context: UncertainContext<R, ObjectViewContext<R, VT, CT>>,
  options?: PartialOptions<ObjectViewContextDescriptor<VT, CT>>,
): VueConstructor {
  return resolveView<R, VT, CT>(context, 'object', 'DetailView', options);
}

function createFormView<R, VT, CT>(
  context: UncertainContext<R, ObjectViewContext<R, VT, CT>>,
  options?: PartialOptions<ObjectViewContextDescriptor<VT, CT>>,
): VueConstructor {
  return resolveView<R, VT, CT>(context, 'object', 'FormView', options);
}

export { createTableView, createDetailView, createFormView };
