<template>
  <div>
    <p v-for="i in 100">{{i}}</p>
  </div>
</template>
<!--
该组件为100%高布局，可以解决部分键盘输入的问题，但是同时会在safari中出现向下滚动时无法自动隐藏url工具栏和底部栏的问题。
在viewBox里元素定位为absolute，效果等同于fixed。

使用时需要设置 html, body 高为100%:

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

view-box父div也需要为100%高度：
 <div style="height:100%;">
   <view-box ref="viewBox">
     <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
     <router-view></router-view>
     <tabbar slot="bottom"></tabbar>
   </view-box>
 </div>

使用位置slots
header	顶部区域，如果要使用统一的XHeader，可以使用该slot
default	主体内容，可滚动的区域
bottom	底部区域，Tabbar可以使用该slot
body-padding-top	主体的padding-top值，当底部存在x-header等absolute定位元素时需要设置
body-padding-bottom	主体的padding-bottom值，当底部存在tabbar等absolute定位元素时需要设置
-->
<script type="text/ecmascript-6">
    export default {
        data() {
          return {};
        },
        methods: {
          getScrollTop( ) {
            console.log();
          }
        },
        components: {}
    };
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>
