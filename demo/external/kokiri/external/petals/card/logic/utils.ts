import { getComponentConfig } from '../../basic';

function getCardComponentName(): string {
  return getComponentConfig('card', 'name') || 'Card';
}

export { getCardComponentName };
