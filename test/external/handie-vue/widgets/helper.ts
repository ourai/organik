import { isString } from '@ntks/toolbox';
import { EventWithNamespace, EventHandlers } from 'organik';

function getEventWithNamespace(vm: any, event: string = ''): EventWithNamespace {
  return `${event}.vue_inst_${vm._uid}`;
}

function resolveBindEvent(
  vm: any,
  event: string | EventHandlers,
): EventWithNamespace | EventHandlers {
  let resolved: EventWithNamespace | EventHandlers;

  if (isString(event)) {
    resolved = getEventWithNamespace(vm, event as string);
  } else {
    resolved = {} as EventHandlers;

    Object.keys(event as EventHandlers).forEach(key => {
      resolved[getEventWithNamespace(vm, key)] = (event as EventHandlers)[key];
    });
  }

  return resolved;
}

export { getEventWithNamespace, resolveBindEvent };
