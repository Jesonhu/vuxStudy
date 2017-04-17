<template>
  <div class="divider">
    <divider>{{$t('我是有底线的')}}</divider>
    <divider>我是有底线的</divider>
  </div>
</template>
<!--
  线条通过图片实现，如果要改变颜色使用load-more
-->
<script type="text/ecmascript-6">
  import { Divider } from 'vux';

  export default {
    components: {
      Divider
    }
  };
</script>

<style>

</style>
