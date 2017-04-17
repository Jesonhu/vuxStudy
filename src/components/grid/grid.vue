<template>
  <div class="grid">
    <!--简单grid-->
    <group-title>rows = 2</group-title>
    <grid :rows="2">
      <grid-item :label="$t('Grid')" v-for="i in 4" :key="i">
        <img slot="icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242651622,884328141&fm=117&gp=0.jpg">
      </grid-item>
    </grid>

<!--链接grid-->
    <group-title>rows = 3</group-title>
    <grid>
      <grid-item link="/component/cell" :label="$t('Go to Cell')">
        <img slot="icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242651622,884328141&fm=117&gp=0.jpg">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" :label="$t('Go to Cell')">
        <img slot="icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242651622,884328141&fm=117&gp=0.jpg">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242651622,884328141&fm=117&gp=0.jpg">
        <span slot="label">{{ $t('Go to Cell') }}</span>
      </grid-item>
    </grid>

    <group-title>rows = 4</group-title>
    <grid :rows="4">
      <grid-item :label="$t('Grid')" v-for="i in 4" :key="i">
        <img slot="icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242651622,884328141&fm=117&gp=0.jpg">
      </grid-item>
    </grid>

    <group-title>custom content</group-title>
    <grid :rows="5">
      <grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>

  </div>
</template>

<script type="text/ecmascript-6">
  import { Grid, GridItem, GroupTitle } from 'vux';

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    methods: {
      onItemClick () {
        console.log('on item click');
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
