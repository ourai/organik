import { isString, noop } from '@ntks/toolbox';
import {
  ComponentCtor,
  ComponentRenderer,
  BuiltInActionComponentRenderer,
  ActionComponentRenderer,
  ActionDescriptor,
  ViewContext,
  getControl,
} from 'organik';
import Vue, { VNodeData, VueConstructor } from 'vue';
import { MessageBox } from 'element-ui';

const DEFAULT_ACTION_RENDER_TYPE = 'button';

function resolveActionComponent(renderer: BuiltInActionComponentRenderer): ComponentCtor {
  return renderer === 'link' ? getControl('Link')! : getControl('Button')!;
}

function getDefaultActionComponent(): ComponentCtor {
  return resolveActionComponent(DEFAULT_ACTION_RENDER_TYPE);
}

function getActionComponent(
  renderer: ActionComponentRenderer = DEFAULT_ACTION_RENDER_TYPE,
): ComponentRenderer {
  return isString(renderer)
    ? resolveActionComponent(renderer as BuiltInActionComponentRenderer)
    : (renderer as VueConstructor);
}

function resolveVirtualNodeData(
  action: ActionDescriptor,
  viewContext: ViewContext,
  vm: Vue,
): VNodeData {
  const nodeData: VNodeData = { staticClass: 'ActionComponentRenderer' };
  const renderer = action.render || DEFAULT_ACTION_RENDER_TYPE;

  if (renderer === 'button') {
    const props: Record<string, any> = {};

    if (action.primary) {
      props.color = 'primary';
    }

    if (action.danger) {
      props.color = 'danger';
    }

    props.disabled = vm.$data.disabled;

    nodeData.props = props;
  } else {
    nodeData.props = action.config || {};
  }

  let beforeExecute: ((callback: () => Promise<void>) => void) | undefined;

  if (action.danger || action.confirm) {
    beforeExecute = callback =>
      MessageBox.confirm(
        isString(action.confirm)
          ? (action.confirm as string)
          : `确定要${action.text || '执行此操作'}？`,
        '提示',
        { type: 'warning' },
      )
        .then(callback)
        .catch(noop);
  }

  const executeAction = async () => {
    if (action.execute) {
      await Promise.resolve(action.execute(viewContext, vm));
    }
  };

  nodeData.on = {
    click: () => {
      if (beforeExecute) {
        beforeExecute(executeAction);
      } else {
        executeAction();
      }
    },
  };

  return nodeData;
}

export {
  DEFAULT_ACTION_RENDER_TYPE,
  getDefaultActionComponent,
  getActionComponent,
  resolveVirtualNodeData,
};
