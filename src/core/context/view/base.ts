import { mixin } from '@ntks/toolbox';

import { ModelDescriptor, ViewFieldDescriptor } from '../../typing';
import { resolveFieldMap } from '../../model';

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

export { resolveFields };
