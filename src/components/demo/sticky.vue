<template>
  <div>
    <br/>
    <br/>
    <br/>
    <div style="height:44px;">
      <sticky scroll-box="vux_view_box_body" :offset="46" :check-sticky-support="false">
        <tab :line-width="1">
          <tab-item selected>正在正映</tab-item>
          <tab-item>即将上映</tab-item>
        </tab>
      </sticky>
    </div>
    <p v-for="i in 100">{{i}}<br></p>
  </div>
</template>
<!--
  导航菜单
  属性props:
  scroll-box 滚动容器，默认为window，如果你使用了viewbox，那么你需要指定容器id：vux_view_box_body
  check-sticky-support 默认true 是否检测当前浏览器是否支持sticky特性，禁用则在iPhone设置上也使用scroll实现
  offset 距离顶部高度，在存在头部（如使用了x-header）的情况下需要设置一个距离
-->
<script>
  import { Tab, TabItem, Sticky } from 'vux';

  export default {
    components: {
      Tab,
      TabItem,
      Sticky
    }
  };
</script>
