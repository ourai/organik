import { ITypographyComponent } from './typing';

const LINE_MODIFIERS: { [key: string]: string } = {
  over: 'overline',
  through: 'lineThrough',
  under: 'underline',
};

export function getTypoClassNames<DerivedComponent extends Partial<ITypographyComponent>>(
  componentInst: DerivedComponent,
  componentName: string,
  ignoreBoldness: boolean = false,
): string[] {
  const classNames: string[] = [];

  if (componentInst.line && componentInst.line !== 'none') {
    classNames.push(`${componentName}--${LINE_MODIFIERS[componentInst.line]}`);
  }

  if (componentInst.color) {
    classNames.push(`${componentName}--${componentInst.color}`);
  }

  if (ignoreBoldness === false && componentInst.bold) {
    classNames.push(`${componentName}--bold`);
  }

  return classNames;
}

export * from './typing';
