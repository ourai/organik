import { getComponentConfig } from '../../basic';

function getTabsComponentName(): string {
  return getComponentConfig('tabs', 'name') || 'Tabs';
}

export { getTabsComponentName };
