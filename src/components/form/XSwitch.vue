<template>
  <div>
    <group :title="$t('Basic Usage')">
      <x-switch :title="$t('default false')"></x-switch>
      <x-switch :title="$t('default true')" :inline-desc="value1 + ''" v-model="value1"></x-switch>
    </group>
    <group :title="$t('disabled')">
      <x-switch :title="$t('default false')" disabled></x-switch>
      <x-switch :title="$t('default true')" :value="true" disabled></x-switch>
    </group>
    <group :title="$t('html title')">
      <x-switch disabled :title="$t('switch red')"></x-switch>
    </group>
  </div>
</template>
<!--
title	String			label文字
disabled	Boolean	false		是否不可点击
value	Boolean	false		表单值, 使用v-model绑定
inline-desc	String			标签下文字
事件：
on-change	(value)	值变化时触发，参数为 (currentValue)
-->
<i18n>
  default false:
  zh-CN: 默认 false
  default true:
  zh-CN: 默认 true
  disabled:
  zh-CN: 禁用
  html title:
  zh-CN: 使用html设置title
  switch red:
  en: <span style="color:red">I am Red.</span>
  zh-CN: <span style="color:red">我是红色</span>
</i18n>

<script>
  import { XSwitch, Group } from 'vux';

  export default {
    components: {
      XSwitch,
      Group
    },
    data () {
      return {
        value1: true
      };
    }
  };
</script>
