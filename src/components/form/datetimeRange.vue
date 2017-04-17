<template>
  <div>
    <group :title="value + ''">
      <datetime-range :title="$t('Choose')" start-date="2017-01-01" end-date="2017-02-02" :format="$t('daterange-format')" v-model="value" @on-change="onChange"></datetime-range>
    </group>
  </div>
</template>
<!--
该组件和 Datetime 组件不同的地方是年月日集中显示在一栏，适合范围不大的日期选择。
需要在Group组件里使用

Props
name	type	default	version	description
title	String			标题文字
value	String			表单值，v-model绑定
inline-desc	String			描述字符
placeholder	String			提示文字
start-date	String			限定最小日期，注意该限制只能限定到日期，不能限定到小时分钟
end-date	String			限定最大日期，注意该限制只能限定到日期，不能限定到小时分钟
format	String	YYYY-MM-DD		日期栏的显示格式

事件
on-change	(value)	表单值变化时触发, 参数 (newVal)
-->
<i18n>
  Choose:
  zh-CN: 选择
  daterange-format:
  en: 'YYYY/MM/DD'
  zh-CN: 'YYYY年MM月DD日'
</i18n>

<script>
  import { Group, DatetimeRange } from 'vux';

  export default {
    components: {
      Group,
      DatetimeRange
    },
    methods: {
      onChange (val) {
        this.value = val;
        console.log('change', val);
      }
    },
    data () {
      return {
        value: ['2017-01-15', '03', '05']
      };
    }
  };
</script>
