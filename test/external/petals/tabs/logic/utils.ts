import { getComponentConfig } from '@petals/basic';

function getTabsComponentName(): string {
  return getComponentConfig('tabs', 'name') || 'Tabs';
}

export { getTabsComponentName };
