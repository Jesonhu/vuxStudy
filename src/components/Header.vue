<template>
  <tabbar class="tabbar-header">
    <div class="title">{{title}}</div>
    <tabbar-item class="search">
      <img slot="icon" src="../assets/image/actionbar_search_icon.png">
    </tabbar-item>
  </tabbar>
</template>

<script type="text/ecmascript-6">
  import { Tabbar, TabbarItem } from 'vux';

  export default{
    name: 'AppHeader',
    data (){
      return{
        title:'综合'
      };
    },
    components: {
      Tabbar,
      TabbarItem,
    },
    methods: {
    },
  };
</script>

<style>
  .weui-tabbar.tabbar-header{
    background-color:#00CC66;
    height:50px;
    position:relative;
    top:0px;
    left:0px;
  }
  .tabbar-header .search{
    position:absolute;right:5px;top:5px;z-index:999;
  }
  .tabbar-header .title{
    text-align:center;
    margin:auto;
    color:white;
    line-height:50px;
    font-size:18px;
  }
</style>
