import { getComponentConfig } from '../../basic';

function getPanelComponentName(): string {
  return getComponentConfig('panel', 'name') || 'Panel';
}

export { getPanelComponentName };
