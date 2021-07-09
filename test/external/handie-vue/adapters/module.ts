import { registerModules as _registerModules } from 'organik';

import { ModuleDescriptor } from '../types/module';
import { ViewGetter } from '../types/view';

const moduleViewMap = new Map<string, Map<string, ViewGetter>>();

function registerModules(descriptors: ModuleDescriptor[]): void {
  _registerModules(descriptors);

  descriptors.forEach(({ name, views }) => {
    if (!views) {
      return;
    }

    Object.keys(views).forEach(viewName => {
      const viewMap = moduleViewMap.get(name) || new Map<string, ViewGetter>();

      viewMap.set(viewName, views[viewName] as ViewGetter);
      moduleViewMap.set(name, viewMap);
    });
  });
}

function getViewGetter(moduleName: string, viewName: string): ViewGetter | undefined {
  return moduleViewMap.has(moduleName) ? moduleViewMap.get(moduleName)!.get(viewName) : undefined;
}

export { registerModules, getViewGetter };
