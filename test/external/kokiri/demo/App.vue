<template>
  <kokiri-app class="HelloWorld">
    <layout-container>
      <layout-aside class="HelloWorld-sidebar">
        <router-link class="HelloWorld-brand" :to="{ name: 'home' }">Kokiri for Vue</router-link>
        <ul class="HelloWorld-menu">
          <li :key="item.name" v-for="item in menuItems">
            <router-link :to="{ name: item.name }">{{ item.text }}</router-link>
          </li>
        </ul>
      </layout-aside>
      <layout-container>
        <layout-header> </layout-header>
        <layout-main>
          <router-view />
        </layout-main>
      </layout-container>
    </layout-container>
  </kokiri-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import {
  App as KokiriApp,
  LayoutContainer,
  LayoutHeader,
  LayoutMain,
  LayoutAside,
} from '../components';
import { demoRoutes } from './blocks';

@Component({
  components: {
    KokiriApp,
    LayoutContainer,
    LayoutHeader,
    LayoutMain,
    LayoutAside,
  },
})
export default class HelloWorld extends Vue {
  private menuItems: any[] = demoRoutes;
}
</script>

<style lang="scss" scoped>
.HelloWorld {
  &-brand,
  &-menu {
    padding-left: 24px;
  }

  &-brand,
  &-menu a {
    color: #fff;
  }

  &-brand {
    font-size: 20px;
    font-weight: bold;
    line-height: 48px;
    text-decoration: none;
  }

  &-menu {
    margin-top: 24px;
  }
}
</style>
