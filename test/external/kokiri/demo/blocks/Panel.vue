<template>
  <demo-container title="面板 Panel">
    <demo-section title="演示">
      <demo-block title="基础用法">
        <div class="PanelDemo-darkBgLayer">
          <panel title="面板标题">
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
            <paragraph
              >在上世纪 80
              年代出生于东北，虽拥有东北人该有的身高，却没有东北人该有的酒量。毕业后不足一年便离开了那冰寒之地来到人杰地灵的杭州——江南最美的城市。</paragraph
            >
            <paragraph
              >我拥有强烈的好奇心，对宇宙万物及相关的一切充满兴趣，从小看着科普读物和各种科教栏目长大的；我喜欢未知的新事物，总想去尝试做各种事情以及到处走走看看，时不时会漫步于深山老林或市井之间，也会到异乡体会当地民俗风情。</paragraph
            >
            <paragraph
              >回想过去，贯穿我目前为止的人生的几个关键词是：<kokiri-text line="under" bold
                >好奇</kokiri-text
              >、<kokiri-text line="under" bold>胆大</kokiri-text>、<kokiri-text line="under" bold
                >自我</kokiri-text
              >。</paragraph
            >
          </panel>
        </div>
      </demo-block>
      <demo-block title="自定义顶部">
        <div class="PanelDemo-darkBgLayer">
          <panel>
            <panel-header title="自定义标题"><kokiri-link>更多</kokiri-link></panel-header>
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
            <paragraph
              >在上世纪 80
              年代出生于东北，虽拥有东北人该有的身高，却没有东北人该有的酒量。毕业后不足一年便离开了那冰寒之地来到人杰地灵的杭州——江南最美的城市。</paragraph
            >
            <paragraph
              >我拥有强烈的好奇心，对宇宙万物及相关的一切充满兴趣，从小看着科普读物和各种科教栏目长大的；我喜欢未知的新事物，总想去尝试做各种事情以及到处走走看看，时不时会漫步于深山老林或市井之间，也会到异乡体会当地民俗风情。</paragraph
            >
            <paragraph
              >回想过去，贯穿我目前为止的人生的几个关键词是：<kokiri-text line="under" bold
                >好奇</kokiri-text
              >、<kokiri-text line="under" bold>胆大</kokiri-text>、<kokiri-text line="under" bold
                >自我</kokiri-text
              >。</paragraph
            >
          </panel>
        </div>
      </demo-block>
      <demo-block title="限定高度">
        <div class="PanelDemo-darkBgLayer">
          <panel
            title="面板标题"
            body-class-name="PanelDemo-panelBody"
            fixed
            :body-style="{ height: '200px', backgroundColor: '#ff0' }"
          >
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
            <paragraph
              >在上世纪 80
              年代出生于东北，虽拥有东北人该有的身高，却没有东北人该有的酒量。毕业后不足一年便离开了那冰寒之地来到人杰地灵的杭州——江南最美的城市。</paragraph
            >
            <paragraph
              >我拥有强烈的好奇心，对宇宙万物及相关的一切充满兴趣，从小看着科普读物和各种科教栏目长大的；我喜欢未知的新事物，总想去尝试做各种事情以及到处走走看看，时不时会漫步于深山老林或市井之间，也会到异乡体会当地民俗风情。</paragraph
            >
            <paragraph
              >回想过去，贯穿我目前为止的人生的几个关键词是：<kokiri-text line="under" bold
                >好奇</kokiri-text
              >、<kokiri-text line="under" bold>胆大</kokiri-text>、<kokiri-text line="under" bold
                >自我</kokiri-text
              >。</paragraph
            >
          </panel>
        </div>
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import {
  Panel,
  PanelHeader,
  Paragraph,
  Text as KokiriText,
  Link as KokiriLink,
} from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    Panel,
    PanelHeader,
    Paragraph,
    KokiriText,
    KokiriLink,
  },
})
export default class PanelDemo extends Vue {}
</script>

<style lang="scss" scoped>
.PanelDemo {
  &-darkBgLayer {
    padding: 8px;
    background-color: #ececec;
  }
}
</style>

<style lang="scss">
.PanelDemo {
  &-panelBody {
    color: #f00;
  }
}
</style>
