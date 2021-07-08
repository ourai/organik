import { setComponentConfig, getComponentConfig } from '@petals/basic';

import { IconProvider, IconProviders } from '../../typing';

function getIconProviders(): IconProviders {
  return getComponentConfig('icon', 'providers') || {};
}

function getIconProvider(providerAlias: string): IconProvider | undefined {
  return getIconProviders()[providerAlias];
}

function isIconProviderExisted(providerAlias: string): boolean {
  return Object.prototype.hasOwnProperty.call(getIconProviders(), providerAlias);
}

function registerIconProviders(providers: IconProviders): void {
  setComponentConfig<IconProviders>('icon', 'providers', {
    ...getIconProviders(),
    ...providers,
  });
}

function setDefaultIconProvider(providerAlias: string): void {
  setComponentConfig<string>('icon', 'defaultProvider', providerAlias);
}

function getDefaultIconProvider(): string | undefined {
  return getComponentConfig('icon', 'defaultProvider');
}

export {
  getIconProviders,
  getIconProvider,
  isIconProviderExisted,
  registerIconProviders,
  setDefaultIconProvider,
  getDefaultIconProvider,
};
