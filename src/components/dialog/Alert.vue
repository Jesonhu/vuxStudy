<template>
  <div>
    <group>
      <x-switch :title="$t('Show Me')" v-model="show"></x-switch>
    </group>
    <div v-transfer-dom>
      <alert v-model="show" :title="$t('Congratulations')" @on-show="onShow" @on-hide="onHide"> {{ $t('Your Message is sent successfully~') }}</alert>
    </div>

    <group title="prop:content">
      <x-switch :title="$t('Show Me')" v-model="show2"></x-switch>
    </group>
    <div v-transfer-dom>
      <alert v-model="show2" :title="$t('Congratulations')" :content="$t('Your Message is sent successfully~')"></alert>
    </div>

    <group :title="$t('Use as a plugin')">
      <cell :title="$t('Show Me')" @click.native="showPlugin" is-link></cell>
      <cell :title="$t('will auto close in 3s')" @click.native="showPluginAuto" is-link></cell>
    </group>
  </div>
</template>

<i18n>
  Show Me:
  zh-CN: 显示
  Use as a plugin:
  zh-CN: 以插件方式调用
  Congratulations:
  zh-CN: 恭喜
  Your Message is sent successfully~:
  zh-CN: 消息已成功发送
  Do you agree?:
  zh-CN: 同意不?
  will auto close in 3s:
  zh-CN: 3秒后关闭
</i18n>
<!--
属性props
value	Boolean	false		是否显示, 使用 v-model 绑定变量
title	String			弹窗标题
content	String		v2.2.0	提示内容，作为 slot:default 的默认内容，如果使用 slot:default, 将会失效
button-text	String	ok(确定)		按钮文字
mask-transition	String	vux-fade		遮罩动画
dialog-transition	String	vux-dialog		弹窗主体动画
事件
on-show	 	弹窗显示时触发
-->
<script>
  import { Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux';
  import Vue from 'vue';
  import  { AlertPlugin } from 'vux';
  Vue.use(AlertPlugin);

  export default {
    directives: {
      TransferDom
    },
    components: {
      Alert,
      Group,
      XSwitch,
      Cell
    },
    data () {
      return {
        show: false,
        show1: false,
        show2: false
      };
    },
    methods: {
      onHide () {
        console.log('on hide');
      },
      onShow () {
        console.log('on show');
      },
      showPlugin () {
        this.$vux.alert.show({
          title: 'VUX is Cool',
          content: this.$t('Do you agree?'),
          onShow () {
            console.log('Plugin: I\'m showing');
          },
          onHide () {
            console.log('Plugin: I\'m hiding now');
          }
        });
      },
      showPluginAuto () {
        this.showPlugin();
        setTimeout(() => {
          this.$vux.alert.hide();
        }, 3000);
      }
    }
  };
</script>
