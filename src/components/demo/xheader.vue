<template>
  <div>
    <br>
    <x-header>标题</x-header>
    <br>
    <x-header :left-options="{showBack: false}">没导航</x-header>
    <br>
    <x-header :left-options="{backText: ''}">导航没文字提醒</x-header>
    <br>
    <x-header :left-options="{backText: ''}" :right-options="{showMore: true}" @on-click-more="showMenus = true">右侧更多</x-header>
    <br>
    <x-header>链接导航<a slot="right">Feedback</a></x-header>
    <br>
    <x-header>long long long long long long long text<a slot="right">Feedback</a></x-header>
    <br>
    <x-header :left-options="{backText: ''}">with left slot<a slot="left">关闭</a></x-header>
    <br>
    <x-header style="background-color:#000;">自定义颜色</x-header>

    <!--弹出菜单-->
    <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
  </div>
</template>
<!--
  顶部导航
  属性 props
  left-options.showBack	类型Boolean	默认true		是否显示返回文字
  left-options.backText	   String	     Back		返回文字
  left-options.preventGoBack	Boolean	false		是否阻止返回
  title	String			标题
  transition	String			标题出现的动画
  right-options.showMore	Boolean	false		是否显示右侧的更多图标

  事件：
  on-click-more	 	点击右侧更多时触发
  on-click-back	 	当left-options.preventGoBack为true,点击左边返回时触发
  on-click-title	 	点击标题时触发
-->
<script>
  import { XHeader, Actionsheet } from 'vux';

  export default {
    components: {
      XHeader,
      Actionsheet
    },
    data () {
      return {
        menus: {
          menu1: '选择图片',
          menu2: '从相片集中选择'
        },
        showMenus: false
      };
    }
  };
</script>
