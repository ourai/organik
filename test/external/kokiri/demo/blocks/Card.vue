<template>
  <demo-container title="卡片 Card">
    <demo-section title="演示">
      <demo-block title="基础用法">
        <grid-row :gutter="16">
          <grid-col :md="12" :lg="8" :key="`card-${n}`" v-for="n in 3">
            <card title="卡片标题">
              <paragraph
                >嗨～大家好！我叫欧雷，是一枚穿着大叔外衣却永远长不大的小男孩。\(^o^)/</paragraph
              >
              <paragraph
                >「欧雷」，起初是给自己的小说中的主人公起的名字，但从某一天起，它成为我畅游网络世界的网名和现实世界的花名。只要看到这个名字以及一成不变的<kokiri-link
                  href="http://www.pixiv.net/member_illust.php?mode=medium&illust_id=41438293"
                  target="blank"
                  >自画像</kokiri-link
                >，便毫无疑问是我了！</paragraph
              >
            </card>
          </grid-col>
        </grid-row>
      </demo-block>
      <demo-block title="自定义顶部">
        <grid-row :gutter="16">
          <grid-col :md="12" :lg="8" :key="`card-${n}`" v-for="n in 3">
            <card>
              <card-header title="自定义标题"><kokiri-link>更多</kokiri-link></card-header>
              <paragraph
                >嗨～大家好！我叫欧雷，是一枚穿着大叔外衣却永远长不大的小男孩。\(^o^)/</paragraph
              >
              <paragraph
                >「欧雷」，起初是给自己的小说中的主人公起的名字，但从某一天起，它成为我畅游网络世界的网名和现实世界的花名。只要看到这个名字以及一成不变的<kokiri-link
                  href="http://www.pixiv.net/member_illust.php?mode=medium&illust_id=41438293"
                  target="blank"
                  >自画像</kokiri-link
                >，便毫无疑问是我了！</paragraph
              >
            </card>
          </grid-col>
        </grid-row>
      </demo-block>
      <demo-block title="带图片的">
        <grid-row :gutter="16">
          <grid-col :md="12" :lg="8">
            <card>
              <card-header :image="cardImage" />
              <paragraph
                >嗨～大家好！我叫欧雷，是一枚穿着大叔外衣却永远长不大的小男孩。\(^o^)/</paragraph
              >
              <paragraph
                >「欧雷」，起初是给自己的小说中的主人公起的名字，但从某一天起，它成为我畅游网络世界的网名和现实世界的花名。只要看到这个名字以及一成不变的<kokiri-link
                  href="http://www.pixiv.net/member_illust.php?mode=medium&illust_id=41438293"
                  target="blank"
                  >自画像</kokiri-link
                >，便毫无疑问是我了！</paragraph
              >
            </card>
          </grid-col>
          <grid-col :md="12" :lg="8">
            <card>
              <card-header :image="cardImage" />
              <paragraph
                >嗨～大家好！我叫欧雷，是一枚穿着大叔外衣却永远长不大的小男孩。\(^o^)/</paragraph
              >
              <paragraph
                >「欧雷」，起初是给自己的小说中的主人公起的名字，但从某一天起，它成为我畅游网络世界的网名和现实世界的花名。只要看到这个名字以及一成不变的<kokiri-link
                  href="http://www.pixiv.net/member_illust.php?mode=medium&illust_id=41438293"
                  target="blank"
                  >自画像</kokiri-link
                >，便毫无疑问是我了！</paragraph
              >
              <card-footer>
                <div class="CardDemo-footerAction"><kokiri-icon refs="java" /></div>
                <div class="CardDemo-footerAction"><kokiri-icon refs="python" /></div>
                <div class="CardDemo-footerAction"><kokiri-icon refs="javascript" /></div>
              </card-footer>
            </card>
          </grid-col>
        </grid-row>
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import {
  Card,
  CardHeader,
  CardFooter,
  Paragraph,
  Icon as KokiriIcon,
  Link as KokiriLink,
  GridRow,
  GridCol,
  Flex,
} from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    Card,
    CardHeader,
    CardFooter,
    Paragraph,
    KokiriIcon,
    KokiriLink,
    GridRow,
    GridCol,
    Flex,
  },
})
export default class CardDemo extends Vue {
  private cardImage: string =
    'https://ourai.ws/assets/banners/ourai-in-shanghai-mono-43b11ac0260be96696ed32f69c574e3eb29050cd043cdf431688464410bd6f6b.jpg';
}
</script>

<style lang="scss" scoped>
.CardDemo {
  &-darkBgLayer {
    padding: 24px;
    background-color: #ececec;
  }

  &-footerAction {
    width: percentage(1 / 3);
    text-align: center;
  }

  &-footerAction + &-footerAction {
    border-left: 1px solid #f0f0f0;
  }
}
</style>
