import { mixin } from '@ntks/toolbox';

import {
  ModelDescriptor,
  ViewFieldDescriptor,
  ListViewContext,
  ObjectViewContext,
} from '../../typing';
import { resolveFieldMap } from '../../model';

type MixedViewContext = ListViewContext | ObjectViewContext;

const viewContextMap = new Map<string, MixedViewContext>();

function getViewContext(id: string): MixedViewContext | undefined {
  return viewContextMap.get(id);
}

function setViewContext(viewContext: MixedViewContext): void {
  const id = viewContext.getId();

  if (viewContextMap.has(id)) {
    return;
  }

  viewContextMap.set(id, viewContext);
}

function resolveFields(
  fields: ViewFieldDescriptor[],
  model?: ModelDescriptor,
): ViewFieldDescriptor[] {
  if (!model) {
    return fields;
  }

  const fieldMap = resolveFieldMap(model.fields);

  return fields.map(field =>
    fieldMap[field.name]
      ? (mixin(true, {}, fieldMap[field.name], field) as ViewFieldDescriptor)
      : field,
  );
}

export { resolveFields, getViewContext, setViewContext };
