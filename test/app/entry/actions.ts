import { ActionDescriptor, ViewContext, ListViewContext } from 'handie-vue';

export default [
  {
    name: 'gotoCreateFormView',
    context: 'free',
    text: '新增',
    execute: (context: ViewContext, vm) =>
      vm.$router.push({ name: `${context.getModuleContext().getModuleName()}NewForm` }),
  },
  {
    name: 'gotoEditFormView',
    context: 'single',
    text: '编辑',
    execute: (context: ListViewContext, vm) =>
      vm.$router.push({
        name: `${context.getModuleContext().getModuleName()}EditForm`,
        params: { id: context.getValue()[0].id },
      }),
  },
  {
    name: 'gotoDetailView',
    context: 'single',
    text: '查看',
    execute: (context: ListViewContext, vm) =>
      vm.$router.push({
        name: `${context.getModuleContext().getModuleName()}Detail`,
        params: { id: context.getValue()[0].id },
      }),
  },
  {
    name: 'deleteOne',
    context: 'single',
    text: '删除',
    danger: true,
    execute: (context: ListViewContext) =>
      context.deleteOne && context.deleteOne(context.getValue()[0], () => context.reload()),
  },
  {
    name: 'deleteList',
    context: 'batch',
    text: '批量删除',
    danger: true,
    execute: (context: ListViewContext) =>
      context.deleteList && context.deleteList(context.getValue(), () => context.reload()),
  },
] as ActionDescriptor[];
