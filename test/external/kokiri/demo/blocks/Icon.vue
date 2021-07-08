<template>
  <demo-container title="图标 Icon">
    <demo-section title="图标列表">
      <div class="IconDemo-size">
        <kokiri-icon class="IconDemo-icon" :key="icon" :refs="icon" v-for="icon in iconList" />
      </div>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Icon as KokiriIcon } from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    KokiriIcon,
  },
})
export default class IconDemo extends Vue {
  private iconList: string[] = ['java', 'python', 'facebook', 'shoppingcart', 'javascript'];
}
</script>

<style lang="scss" scoped>
.IconDemo {
  &-size {
    font-size: 18px;
  }

  &-icon {
    margin-right: 8px;
  }
}
</style>
