const globalNamespace: string = '__PETALS-UI-GLOBAL__';

function setComponentConfig<T = any>(moduleName: string, configKey: string, configValue: T): void {
  if (!window[globalNamespace]) {
    window[globalNamespace] = {};
  }

  const globalConfig: { [key: string]: any } = window[globalNamespace];

  if (!globalConfig[moduleName]) {
    globalConfig[moduleName] = {};
  }

  globalConfig[moduleName][configKey] = configValue;
}

function getComponentConfig<T = any>(moduleName: string, configKey: string): T | undefined {
  return window[globalNamespace] && window[globalNamespace][moduleName]
    ? window[globalNamespace][moduleName][configKey]
    : undefined;
}

export { setComponentConfig, getComponentConfig };
