import { LooseSize } from '../../typing';

function getDescendantClassName(componentName: string, descendant: string): string {
  return `${componentName}-${descendant}`;
}

function getModifierClassName(componentName: string, modifier: string): string {
  return `${componentName}--${modifier}`;
}

function normalizeLooseSize(size: LooseSize): string {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  if (size == null || typeof size !== 'string' || size === 'none') {
    return '';
  }

  return size;
}

export { getDescendantClassName, getModifierClassName, normalizeLooseSize };
