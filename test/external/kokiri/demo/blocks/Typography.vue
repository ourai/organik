<template>
  <demo-container title="排版 Typography">
    <demo-section title="演示">
      <demo-block title="基础用法">
        <heading :level="1">欧雷与欧雷流</heading>
        <paragraph
          >「欧雷流」，从词中不难看出其与「欧雷」有着莫大的关系，所以，要想了解「欧雷流」就得先了解「欧雷」。</paragraph
        >
        <heading :level="2">欧雷，就是我</heading>
        <paragraph>嗨～大家好！我叫欧雷，是一枚穿着大叔外衣却永远长不大的小男孩。\(^o^)/</paragraph>
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
        <heading :level="3">好奇宝宝</heading>
        <paragraph
          >不知是什么决定的，使我一直有旺盛的好奇心。星座？血型？或是其他？现在想想，小学时发生的很多事情对我影响很大，「从娃娃抓起」果真有其道理！</paragraph
        >
      </demo-block>
      <demo-block title="标题">
        <grid-row>
          <grid-col :span="8">
            <heading :level="n" :key="`h-${n}`" v-for="n in 6">h{{ n }} 标题</heading>
          </grid-col>
          <grid-col :span="8">
            <heading line="over" :level="1">h1 标题</heading>
            <heading line="through" :level="2">h2 标题</heading>
            <heading line="under" :level="3">h3 标题</heading>
            <heading line="over" :level="4">h4 标题</heading>
            <heading line="through" :level="5">h5 标题</heading>
            <heading line="under" :level="6">h6 标题</heading>
          </grid-col>
          <grid-col :span="8">
            <heading
              :level="idx + 1"
              :color="color"
              :key="`heading-color-${color}`"
              v-for="(color, idx) in typoColors"
              >h{{ idx + 1 }} 标题</heading
            >
          </grid-col>
        </grid-row>
      </demo-block>
      <demo-block title="文本与链接">
        <grid-row>
          <grid-col :span="6">
            <div><kokiri-text class="TypographyDemo-text">文本（默认）</kokiri-text></div>
            <div><kokiri-text class="TypographyDemo-text" bold>文本（加粗）</kokiri-text></div>
          </grid-col>
          <grid-col :span="6">
            <div :key="`text-pos-${pos}`" v-for="pos in typoLinePos">
              <kokiri-text class="TypographyDemo-text" :line="pos">文本（{{ pos }}）</kokiri-text>
            </div>
          </grid-col>
          <grid-col :span="6">
            <div :key="`text-color-${color}`" v-for="color in typoColors">
              <kokiri-text class="TypographyDemo-text" :color="color"
                >文本（{{ color }}）</kokiri-text
              >
            </div>
          </grid-col>
          <grid-col :span="6">
            <div><kokiri-link class="TypographyDemo-link">链接（无地址）</kokiri-link></div>
            <div :key="`link-target-${t}`" v-for="t in linkTargets">
              <kokiri-link class="TypographyDemo-link" href="https://ourai.ws/" :target="t"
                >链接（{{ t }}）</kokiri-link
              >
            </div>
          </grid-col>
        </grid-row>
      </demo-block>
      <demo-block title="段落">
        <paragraph
          >可被人们感知的世间万物是有所形态的，是「形而下」的「器」，等同于「存在」。</paragraph
        >
        <paragraph bold
          >「存在」是不以人的意志为转移的，就在那里的，可以是物质的，也可以是精神的。它大概包含两大部分：代表其特点、特性的「性质」；代表其自身运作和与外界建立联系的「规律」，也可称之为「逻辑」。</paragraph
        >
        <paragraph line="over"
          >「存在」是个相对抽象的概念，「实体」是与之相关联且更为具体的——能够相互区别且独立存在的事物。它的概念比较宽泛，其代表的可以是具体的，也可以是抽象的；可以是自然的，也可以是人工的；可以是实际存在的，也可以是虚拟出来的……</paragraph
        >
        <paragraph line="through"
          >「人」是「实体」，「狗」是「实体」，「风」是「实体」，「语言」是「实体」，「物质」是「实体」，「精神」也是「实体」。即便如此，我们在说「实体」时，大多是指那些看得见摸得着的。另外，「实体」是一系列能够描述其特性的属性的集合。</paragraph
        >
        <paragraph line="under"
          >在「实体」的背后，有着永远也无法知道其真面目的永恒不变的什么东西在默默地起着作用，它就是「形而上」的「道」——这个世界的「本质」。</paragraph
        >
        <paragraph color="primary"
          >世界的「本质」究竟是什么不在本文所探讨的范围内，但可以说说我认为它所具备的一些特性。它包含两部分：能够自描述的「描述」，用于理解「实体」的「性质」和「逻辑」；依据「描述」运作的「基本逻辑」，是去解释「实体」的「性质」和「逻辑」。</paragraph
        >
        <paragraph color="success"
          >「基本逻辑」以「描述」作为输入并输出新的「描述」，可以用表达式 R = f(S)
          来表示。其中，「S」和「R」是「描述」，「f」是「基本逻辑」。运作过程大致分为起始、活动中及结束这三个阶段，体现了「实体」从诞生到消亡的生命周期。「实体」在尚未消亡时会据其「逻辑」阶段性地发生「事件」用以与其他「实体」进行交互，消亡后会产生新的「实体」。</paragraph
        >
        <paragraph color="warning"
          >「描述」决定了「实体」是什么以及该怎么样，「基本逻辑」使「实体」是动态的而非静止的。</paragraph
        >
        <paragraph color="danger"
          >将人对某个客观事物，即上文所说的「实体」的认知过程粗略地划分为四个阶段，各阶段的产物分别为「数据」、「信息」、「知识」和「智慧」。</paragraph
        >
        <paragraph color="info"
          >人们在观察、感知了「实体」之后的结果，叫作「数据」。比如你遇到一个人，具有黄色皮肤、黑色瞳孔，披着金色长发，浑身散发出沁人心脾的香气。这段描述中的「黄」、「黑」、「金」、「长」、「香」等就是「数据」。</paragraph
        >
        <paragraph color="secondary"
          >「数据」是用来表示「实体」的未经加工的原始素材，它是离散的。单纯的「数据」是没有任何价值的，但当人们将一系列「数据」与被观察、被感知的「实体」进行关联之后，「实体」的属性给「数据」赋予了含义，就成了一个有价值的「数据」集合，就像上面那段对遇到的人的描述——这就是「信息」。</paragraph
        >
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import {
  Heading,
  Text as KokiriText,
  Link as KokiriLink,
  Paragraph,
  GridRow,
  GridCol,
} from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    Heading,
    KokiriText,
    KokiriLink,
    Paragraph,
    GridRow,
    GridCol,
  },
})
export default class TypographyDemo extends Vue {
  private typoColors: string[] = ['primary', 'success', 'warning', 'danger', 'info', 'secondary'];

  private typoLinePos: string[] = ['over', 'through', 'under'];

  private linkTargets: string[] = ['self', 'blank', 'parent', 'top'];
}
</script>

<style lang="scss" scoped>
.TypographyDemo {
  &-link {
    margin-right: 8px;
  }
}
</style>
