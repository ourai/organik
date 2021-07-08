import { getComponentConfig } from '@petals/basic';

function getPanelComponentName(): string {
  return getComponentConfig('panel', 'name') || 'Panel';
}

export { getPanelComponentName };
