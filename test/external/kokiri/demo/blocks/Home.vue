<template>
  <ul>
    <li :key="route.name" v-for="route in routes">
      <router-link :to="{ name: route.name }">{{ route.text }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import demoRoutes from './routes';

@Component
export default class DemoHome extends Vue {
  private routes: any = demoRoutes;
}
</script>
