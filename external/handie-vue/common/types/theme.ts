interface ActionCommonBehaviors {
  showIcon?: boolean; // 是否显示图标
  iconOnly?: boolean; // 是否只显示图标
}

interface FilterCommonBehaviors {
  showHintAsPlaceholder?: boolean; // 输入提示作为过滤器占位符显示
}

interface SearchCommonBehaviors {
  keepConditionInUrl?: boolean;
}

interface FieldCommonBehaviors {
  booleanFieldWidgetType?: 'select' | 'radio' | 'checkbox' | 'switch'; // 布尔字段默认部件
  showHintAsPlaceholder?: boolean; // 输入提示作为表单控件占位符显示
  showHintAtFormItem?: boolean; // 输入提示显示在表单条目中
  hintPositionOfFormItem?: 'explain' | 'label'; // 表单条目中输入提示所在位置
  showValidationRulesAsNative?: boolean; // 校验规则作为原生属性
}

interface ViewCommonBehaviors {
  objectViewFormLayout?: 'grid' | 'flex' | 'vertical' | 'inline'; // 表单布局
  objectViewFormControlLabelWidth?: number | string; // 表单控件文本标签宽度
}

interface CommonWidgetBehaviors {
  action?: ActionCommonBehaviors;
  filter?: FilterCommonBehaviors;
  search?: SearchCommonBehaviors;
  field?: FieldCommonBehaviors;
  view?: ViewCommonBehaviors;
}

interface ThemeBehavior extends CommonWidgetBehaviors {
  [key: string]: any;
}

type ThemeStyle = { [key: string]: string };

interface ThemeOptions {
  style?: ThemeStyle;
  behavior?: ThemeBehavior;
  template?: string;
}

export { ThemeStyle, ThemeBehavior, ThemeOptions };
