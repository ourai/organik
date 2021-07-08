/**
 * 判断 Vue 虚拟节点是否为指定组件
 *
 * @param vNode 虚拟节点
 * @param componentName 组件名
 */
function isSpecificComponent(vNode: any, componentName: string): boolean {
  return vNode.tag && vNode.componentOptions ? vNode.componentOptions.Ctor.options.name === componentName : false;
}

export { isSpecificComponent };
