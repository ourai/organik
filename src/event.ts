import { isString, isFunction, isPlainObject } from '@ntks/toolbox';

import {
  EventWithNamespace,
  EventHandler,
  EventHandlers,
  EventListeners,
  EventEmitter,
} from './typing';

function getEventParts(event: EventWithNamespace): string[] {
  return event.split('.');
}

function removeEventListener(
  listeners: EventListeners,
  event: EventWithNamespace,
  handler?: EventHandler,
): void {
  const listener = listeners[event];

  if (!listener) {
    return;
  }

  let removeListener: boolean;

  // 移除指定处理函数
  if (isFunction(handler)) {
    listener.handlers = listener.handlers.filter((func: EventHandler) => func !== handler);
    removeListener = listener.handlers.length === 0;
  } else {
    removeListener = true;
  }

  if (removeListener) {
    delete listeners[event];
  }
}

function bindEvent(
  listeners: EventListeners,
  event: EventWithNamespace | EventHandlers,
  handler?: EventHandler,
): void {
  let handlers: EventHandlers;

  if (isString(event)) {
    if (!isFunction(handler)) {
      return;
    }

    handlers = { [event as string]: handler } as EventHandlers;
  } else {
    if (!isPlainObject(event)) {
      return;
    }

    handlers = event as EventHandlers;
  }

  Object.entries(handlers).forEach(([kn, h]) => {
    const [k] = getEventParts(kn);

    if (!k || !isFunction(h)) {
      return;
    }

    if (listeners[kn]) {
      listeners[kn].handlers.push(h);
    } else {
      listeners[kn] = { handlers: [h] };
    }
  });
}

function unbindEvent(
  listeners: EventListeners,
  event?: EventWithNamespace,
  handler?: EventHandler,
): void {
  // 移除指定事件的处理函数
  if (isString(event)) {
    const [eventName, eventNamespace] = getEventParts(event!);

    const resolvedRefKeys: string[] = [];

    if (eventName && eventNamespace) {
      resolvedRefKeys.push(event!);
    } else {
      let dependencyValue: string;
      let dependencyIndex: number;

      if (eventName) {
        dependencyValue = eventName;
        dependencyIndex = 0;
      } else {
        dependencyValue = eventNamespace;
        dependencyIndex = 1;
      }

      Object.keys(listeners).forEach(kn => {
        const refKey = getEventParts(kn)[dependencyIndex];

        if (refKey === dependencyValue) {
          resolvedRefKeys.push(kn);
        }
      });
    }

    resolvedRefKeys.forEach(n => removeEventListener(listeners, n, handler));
  } else {
    Object.keys(listeners).forEach(key => {
      delete listeners[key];
    });
  }
}

function triggerEvent<ValueType extends any = any>(
  listeners: EventListeners,
  event: EventWithNamespace,
  payload?: ValueType,
): void {
  const [eventName, eventNamespace] = getEventParts(event);

  Object.keys(listeners).forEach(kn => {
    const [e, ns] = getEventParts(kn);

    if (e === eventName && (eventNamespace ? ns === eventNamespace : true)) {
      listeners[kn].handlers.forEach(func => func(payload!));
    }
  });
}

function createEventEmitter<EventNames extends string = string>(): EventEmitter<EventNames> {
  const listeners = {} as EventListeners<EventNames>;

  return {
    on: bindEvent.bind(null, listeners),
    off: unbindEvent.bind(null, listeners),
    emit: triggerEvent.bind(null, listeners),
  };
}

export { createEventEmitter };
