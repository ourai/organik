import { getComponentConfig } from '@petals/basic';

function getCardComponentName(): string {
  return getComponentConfig('card', 'name') || 'Card';
}

export { getCardComponentName };
