<template>
  <div class="home">
    <!--logo-->
    <!--<app-header></app-header>-->
    <!--顶部导航-->
    <!--<tab :line-width="2"  v-model="index" class="tab-header">
      <tab-item :selected="tag === item" v-for="(item,index) in tagList" @click="tag = item" :key="index">{{item}}</tab-item>
    </tab>-->

    <demo></demo>

    <!--底部导航-->
    <!--<app-footer></app-footer>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, Scroller } from 'vux';
  import AppHeader from './Header';
  import AppFooter from './Footer';
  import demo from './dialog/XDialog';

  const list = () => ['资讯', '博客', '问答', '活动'];

  export default {
    data() {
      return {
        tag: '资讯',
        tagList: list(),
        index:0
      };
    },
    components: {
      AppHeader,
      AppFooter,
      Tab,
      TabItem,
      Scroller,
      demo
    }
  };
</script>

<style>
</style>
