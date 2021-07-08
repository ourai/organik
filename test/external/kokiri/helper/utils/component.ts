import Vue from 'vue';
import { isSpecificComponent } from './is';

function isRootNode($node: Vue): boolean {
  return $node === $node.$root;
}

function findSpecificAncestor($self: Vue, componentName: string): Vue | null {
  let $parent: Vue = $self.$parent;

  while (!isRootNode($parent) && !isSpecificComponent($parent.$vnode, componentName)) {
    $parent = $parent.$parent;
  }

  return isRootNode($parent) ? null : $parent;
}

export { findSpecificAncestor };
