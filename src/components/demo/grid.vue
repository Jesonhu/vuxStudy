<template>
  <div>
    <group-title>两行显示</group-title>
    <grid :rows="3">
      <grid-item :label="$t('你好')" v-for="i in 5" :key="i">
        <img slot="icon" src="../../assets/logo.png">
      </grid-item>
    </grid>

    <group-title>三列显示-链接跳转</group-title>
    <grid>
      <grid-item link="/component/cell" :label="$t('你好')">
        <img slot="icon" src="../../assets/logo.png">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" :label="$t('Go to Cell')">
        <img slot="icon" src="../../assets/logo.png">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">{{ $t('Go to Cell') }}</span>
      </grid-item>
    </grid>

    <group-title>rows = 4</group-title>
    <grid :rows="4">
      <grid-item :label="$t('Grid')" v-for="(i,index) in 4" :key="i" @on-item-click="onItemClick(index)">
        <img slot="icon" src="../../assets/logo.png">
      </grid-item>
    </grid>

    <group-title>自定义内容</group-title>
    <grid :rows="5">
      <grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>

  </div>
</template>
<!--
  grid > grid-item > img
  grid
    props: rows="3" 每行列数，默认3个 最好不超过5个
  grid-item
    props: :label="$t('你好')" $t(文字内容)
           link="url"
           @on-item-click="" 点击
  img
      slot="icon" 直接使用img
-->
<script>
  import { Grid, GridItem, GroupTitle } from 'vux';

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    methods: {
      onItemClick (_index) {
        console.log(_index);
      }
    }
  };
</script>

<style scoped>
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
</style>
