<template>
  <div>
    <group>
      <x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder"></x-address>
      <cell title="上面value值" :value="value"></cell>
    </group>
    <br>
    <group label-width="4em" label-align="left">
      <x-address :title="title2" v-model="value2" raw-value :list="addressData" value-text-align="left"></x-address>
    </group>
    <br/>
    <div style="padding: 0 15px;">
      <x-button type="primary" @click.native="changeData">改变数据</x-button>
    </div>
    <br/>

    <group>
      <x-address title="二级省市" v-model="value3" raw-value :list="addressData"></x-address>
    </group>
    <group>
      <x-address title="只显示省市" v-model="value4" raw-value :list="addressData" hide-district></x-address>
      <cell title="value值" :value="value4"></cell>
      <cell title="转换成文字值" :value="getName(value4)"></cell>
    </group>

    <br/>
    <group title="错误的地址将不能正确渲染到相应位置">
      <x-address title="错误的值" v-model="value5" raw-value :list="addressData" inline-desc="广东省, 深圳 市, 南山区"></x-address>
    </group>
  </div>
</template>
<!--
属性：
raw-value	Boolean	false		指定初始化时绑定的数据是否为文本(即省市名，而不是id)类型，即对于非id值组件内部会转换为id。如果是异步设置value，只能使用id赋值。
title	String			表单标题
value	Array			表单值, 使用v-model绑定
list	Array			地址列表, 可以引入内置地址数据或者用自己的数据，但是需要按照一致的数据结构。
inline-desc	String			标题下的描述
placeholder	String			没有值时的提示文字
hide-district	Boolean	false		是否隐藏区，即只显示省份和城市
value-text-align	String	right		value 对齐方式(text-align), v2.1.0-rc.49开始支持
事件：
on-hide	 	关闭后触发，当非确定时，参数为false，反之为true
on-show	 	显示时触发
-->
<script>
  import { Group, XAddress, ChinaAddressV3Data, XButton, Cell, Value2nameFilter as value2name } from 'vux';
  export default {
    components: {
      Group,
      XAddress,
      XButton,
      Cell
    },
    data () {
      return {
        title: '默认为空',
        value: [],
        title2: '设置值',
        value2: ['天津市', '市辖区', '和平区'],
        value3: ['广东省', '中山市', '--'],
        addressData: ChinaAddressV3Data,
        value4: [],
        value5: ['广东省', '深圳 市', '南山区']
      };
    },
    methods: {
      changeData () {
        this.value2 = ['430000', '430400', '430407'];
      },
      getName (value) {
        return value2name(value, ChinaAddressV3Data);
      },
      logHide (str) {
        console.log('on-hide', str);
      },
      logShow (str) {
        console.log('on-show');
      }
    }
  };
</script>
