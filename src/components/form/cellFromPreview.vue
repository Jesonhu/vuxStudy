<template>
  <div>
    <group>
      <cell title="Total" value="￥1024"></cell>
      <cell-form-preview :list="list" border-intent="true"></cell-form-preview>
    </group>
  </div>
</template>
<!--
  属性 props
  list	Array		v2.2.0	内容列表
  border-intent	Boolean	true	v2.2.1-rc.1	是否显示边框与左边的间隙
-->
<i18n>
  Total:
  zh-CN: 合计
  Apple:
  zh-CN: 苹果
  Banana:
  zh-CN: 香蕉
  Fish:
  zh-CN: 鱼肉
</i18n>

<script>
  import { CellFormPreview, Group, Cell } from 'vux';

  export default {
    components: {
      CellFormPreview,
      Group,
      Cell
    },
    data () {
      return {
        list: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }]
      };
    }
  };
</script>
