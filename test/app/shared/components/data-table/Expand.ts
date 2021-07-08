import Vue from 'vue';

export default Vue.extend({
  name: 'Expand',
  functional: true,
  props: {
    rowIndex: { type: Number },
    row: { type: Object },
    column: { type: Object },
    renderContent: { type: Function },
  },
  render: (_, { props, parent }) =>
    props.renderContent(parent.$parent.$createElement, {
      row: props.row,
      column: props.column,
      index: props.rowIndex,
    }),
});
