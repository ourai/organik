import { retrieveData } from '@ntks/toolbox';

import { ThemeOptions } from '../types';

let defaultTheme: ThemeOptions = {
  behavior: {
    common: {
      action: {
        showIcon: false,
        iconOnly: false,
      },
      filter: {
        showHintAsPlaceholder: true,
      },
      search: {
        keepConditionInUrl: false,
      },
      field: {
        booleanFieldWidgetType: 'checkbox',
        showHintAsPlaceholder: true,
        showHintAtFormItem: false,
        hintPositionOfFormItem: 'explain',
        showValidationRulesAsNative: false,
      },
      view: {
        objectViewFormLayout: 'flex',
        objectViewFormControlLabelWidth: 200,
      },
    },
  },
};

/**
 * 设置默认主题
 *
 * @param options 配置项
 * @param merge 是否合并
 */
function setDefaultTheme(options: ThemeOptions, merge?: boolean): void {
  if (merge) {
    const { style, behavior, template } = options;

    defaultTheme = {
      style: {
        ...(defaultTheme.style || {}),
        ...(style || {}),
      },
      behavior: {
        ...(defaultTheme.behavior || {}),
        ...(behavior || {}),
      },
      template: template || defaultTheme.template,
    };

    return;
  }

  defaultTheme = options;
}

function getThemeOption(optionKey: keyof ThemeOptions): any {
  return optionKey === 'template' ? defaultTheme.template : defaultTheme[optionKey] || {};
}

function getBehaviorByKey(key: string, defaultBehavior?: any): any {
  const behavior = retrieveData(defaultTheme || {}, `behavior.${key}`);

  return behavior === undefined ? defaultBehavior : behavior;
}

export { setDefaultTheme, getThemeOption, getBehaviorByKey };
