function getComponentName(moduleName: string): string {
  return `Kokiri${moduleName.charAt(0).toUpperCase()}${moduleName.slice(1)}`;
}

export { getComponentName };
