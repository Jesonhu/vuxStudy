<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <cell title="Cell" value="value" is-link></cell>
      <cell title="Cell" value="value" is-link value-align="left"></cell>
      <x-input title="上报人" v-model="value1"></x-input>
      <x-input placeholder="I'm placeholder">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-input>
      <x-input title="上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人" v-model="value1"></x-input>
      <x-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></x-number>
      <datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></datetime>
      <selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></selector>
      <selector title="隐患类别" placeholder="Placeholder" :options="['工艺技术', '其他']" v-model="value7"></selector>
      <selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value8"></selector>
      <x-input title="隐患部位" placeholder="必填" v-model="value3"></x-input>
      <x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>
      <popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>
      <popup-picker title="请选择" placeholder="Required" :data="list" v-model="value6" value-text-align="left"></popup-picker>
      <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
      <x-textarea placeholder="请填写详细信息" :show-counter="false" :rows="3">
        <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-textarea>
    </group>
  </div>
</template>
<!--
Group是一个特殊的表单wrapper组件，主要用于将表单分组，单个表单元素也算一组。常见的表单组件都必须作为Group的子组件。 属于Group子组件的有：Cell, XInput, XTextarea, XSwitch, Calendar, XNumber, Radio, XAddress, Datetime, Selector

title	String			分组标题
titleColor	String			分组标题文字颜色
labelWidth	String			为子元素设定统一label宽度
labelAlign	String			为子元素设定统一对齐方式
labelMarginRight	String			为子元素设定统一的右边margin
gutter	String			设定group的上边距，只能用于没有标题时
-->
<script>
  import { Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea } from 'vux';

  export default {
    components: {
      Group,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea
    },
    data () {
      return {
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        value1: '张三',
        value2: '工艺技术',
        value3: '',
        value7: '',
        value8: '',
        value4: '',
        time1: '2017-06-01',
        value5: ['A'],
        value6: [],
        list: [['A', 'B', 'C']],
        numberValue: 0
      };
    }
  };
</script>
