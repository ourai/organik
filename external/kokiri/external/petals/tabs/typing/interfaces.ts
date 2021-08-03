import { TabNavFlag, TabNavType, TabBarPosition } from './aliases';

interface ITabsComponent {
  readonly fixed: boolean;
  readonly activeFlag: TabNavFlag;
  readonly tabBarPosition: TabBarPosition; // 选项卡显示位置
  readonly tabBarStretch: boolean; // 选项卡是否拉伸
}

interface ITabNavComponent {
  readonly flag: TabNavFlag;
  readonly active: boolean;
  readonly disabled: boolean;
}

interface ITabBarComponent {
  readonly navs: TabNavType[];
  readonly activeFlag: TabNavFlag;
  readonly stretch: boolean; // 选项卡是否拉伸
}

interface ITabPaneComponent {
  readonly label: string; // 选项卡文本
}

export { ITabsComponent, ITabNavComponent, ITabBarComponent, ITabPaneComponent };
