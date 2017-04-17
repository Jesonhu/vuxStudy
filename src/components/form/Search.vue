<template>
  <div>
    <img src="../../assets/demo/filter_bg.jpg" style="width: 100%">
    <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel"></search>
    <br>
    <group>
      <cell title="static position demo" is-link link="/component/search-static"></cell>
    </group>
  </div>
</template>
<!--
属性
placeholder	String	搜索(search)		提示文字
cancel-text	String	取消(cancel)		取消文字
value	String			表单值，v-model绑定
results	Array			指定搜索结果, 为带有 title key 的对象组成的数组，如 [{title: 'hello', otherData: otherValue}]
autoFixed	Boolean	true		是否自动固定在顶端
top	String	0px		自动固定时距离顶部的距离
position	String	fixed		自动固定时的定位，一些布局下可能需要使用其他定位，比如absolute
auto-scroll-to-top	Boolean	false		Safari下弹出键盘时可能会出现看不到input，需要手动滚动，启用该属性会在fix时滚动到顶端
事件
on-submit	 	表单提交时触发
on-cancel	 	点击取消按钮时触发
on-change	(value)	输入文字变化时触发
on-result-click	(item)	点击结果条目时触发，原来的result-click事件不符合规范已经废弃
on-focus	 	输入框获取到焦点时触发
-->
<script>
  import { Search, Group, Cell } from 'vux';

  export default {
    components: {
      Search,
      Group,
      Cell
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item));
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : [];
      },
      onFocus () {
        console.log('on focus');
      },
      onCancel () {
        console.log('on cancel');
      }
    },
    data () {
      return {
        results: [],
        value: 'test'
      };
    }
  };
  function getResult (val) {
    let rs = [];
    for (let i = 0; i < 8; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      });
    };
    return rs;
  };
</script>
