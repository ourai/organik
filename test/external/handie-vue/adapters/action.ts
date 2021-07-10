import { ServerAction } from 'organik';

function convertRepositoryToServerActionMap<R>(repository: R): Record<keyof R, ServerAction> {
  const actionMap = {} as Record<keyof R, ServerAction>;

  Object.keys(repository).forEach(funcName => {
    actionMap[funcName] = {
      name: funcName,
      type: 'server',
      execute: repository[funcName],
    } as ServerAction;
  });

  return actionMap;
}

export { convertRepositoryToServerActionMap };
