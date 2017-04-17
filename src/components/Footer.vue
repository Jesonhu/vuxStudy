<template>
  <div class="tabber-footer">
    <tabbar>
      <tabbar-item selected>
        <img slot="icon" src="../assets/image/ic_nav_news_actived.png">
        <span slot="label">综合</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/image/ic_nav_tweet_normal.png">
        <span slot="label">动弹</span>
      </tabbar-item>
      <tabbar-item>
        <img style="height:40px;width:40px;" slot="icon" src="../assets/image/ic_nav_add_normal.png">
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/image/ic_nav_discover_normal.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/image/ic_nav_my_normal.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tabbar from 'vux/src/components/tabbar/tabbar';
  import TabbarItem from 'vux/src/components/tabbar/tabbar-item';

  export default{
    name: 'AppFooter',
    components: {
      Tabbar,
      TabbarItem,
    },
    data(){
      return {
        msg: ''
      };
    }
  };
</script>

<style>

</style>
