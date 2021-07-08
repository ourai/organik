import IconDemo from './Icon.vue';
import ButtonDemo from './Button.vue';
import TypographyDemo from './Typography.vue';
import ImageDemo from './Image.vue';
import BoxDemo from './Box.vue';
import FlexDemo from './Flex.vue';
import GridDemo from './Grid.vue';
import ToolbarDemo from './Toolbar.vue';
import PanelDemo from './Panel.vue';
import CardDemo from './Card.vue';
import TabsDemo from './Tabs.vue';

export default [
  { path: '/icon', name: 'icon', text: '图标 Icon', component: IconDemo },
  { path: '/button', name: 'button', text: '按钮 Button', component: ButtonDemo },
  { path: '/typography', name: 'typography', text: '排版 Typography', component: TypographyDemo },
  { path: '/image', name: 'image', text: '图片 Image', component: ImageDemo },
  { path: '/box', name: 'box', text: '盒子 Box', component: BoxDemo },
  { path: '/flex', name: 'flex', text: '弹性框 Flex', component: FlexDemo },
  { path: '/grid', name: 'grid', text: '栅格 Grid', component: GridDemo },
  { path: '/toolbar', name: 'toolbar', text: '工具栏 Toolbar', component: ToolbarDemo },
  { path: '/panel', name: 'panel', text: '面板 Panel', component: PanelDemo },
  { path: '/card', name: 'card', text: '卡片 Card', component: CardDemo },
  { path: '/tabs', name: 'tabs', text: '选项卡 Tabs', component: TabsDemo },
];
