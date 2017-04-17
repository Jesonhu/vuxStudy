<template>
  <div>
    <divider>default</divider>
    <box gap="10px 10px">
      <x-button>submit</x-button>
      <x-button type="primary">primary</x-button>
      <x-button type="warn">Delete</x-button>

      <divider>action type</divider>
      <x-button type="primary" action-type="button">submit</x-button>
      <x-button type="warn" action-type="reset">reset</x-button>

      <divider>loading</divider>
      <x-button type="default" show-loading>submit</x-button>
      <x-button type="primary" show-loading>submit</x-button>
      <x-button type="warn" show-loading>submit</x-button>

      <divider>mini</divider>
      <x-button mini>submit</x-button>
      <x-button mini type="primary">primary</x-button>
      <x-button mini type="warn">Delete</x-button>
      <br>
      <x-button mini plain>submit</x-button>
      <x-button mini plain type="primary">primary</x-button>

      <divider>plain</divider>
      <x-button plain>submit</x-button>
      <x-button plain type="primary">primary</x-button>

      <divider>you can custom styles</divider>
      <x-button plain type="primary" style="border-radius:99px;">primary</x-button>
      <x-button plain type="primary" class="custom-primary-red">primary</x-button>

      <divider>disabled</divider>
      <x-button disabled>disable submit</x-button>
      <x-button type="primary" disabled>disable primary</x-button>
      <x-button type="warn" disabled>disable Delete</x-button>

      <divider>use :text and :disabled</divider>
      <x-button :text="submit001" :disabled="disable001" @click.native="processButton001" type="primary"></x-button>

      <divider>combined with flexbox</divider>
      <flexbox>
        <flexbox-item>
          <x-button type="primary">primary</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn">Delete</x-button>
        </flexbox-item>
      </flexbox>
      <divider>combined with flexbox</divider>
      <flexbox>
        <flexbox-item>
          <x-button type="default">default</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary">primary</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn">Delete</x-button>
        </flexbox-item>
      </flexbox>

    </box>

  </div>
</template>
<!--
按照Vue文档，在组件上绑定点击事件请使用@click.native。
属性
type	String	default		按钮类型，可选值为 default,primary,warn
disabled	Boolean	false		是否不可点击
text	String			按钮文字，同默认slot
mini	Boolean	false		是否为mini类型，即小尺寸的按钮
plain	Boolean	false		是否是plain样式，没有背景色
action-type	String			button的type属性，默认为浏览器默认(submit)，可选为 submit button reset
-->
<script>
  import { XButton, Box, GroupTitle, Group, Flexbox, FlexboxItem, Divider } from 'vux';

  export default {
    components: {
      XButton,
      Box,
      GroupTitle,
      Group,
      Flexbox,
      FlexboxItem,
      Divider
    },
    methods: {
      change (value) {
        console.log('change:', value);
      },
      processButton001 () {
        this.submit001 = 'processing';
        this.disable001 = true;
      }
    },
    data () {
      return {
        submit001: 'click me',
        disable001: false
      };
    }
  };
</script>

<style lang="less">
  .custom-primary-red {
    border-radius: 99px!important;
    border-color: #CE3C39!important;
    color: #CE3C39!important;
  &:active {
     border-color: rgba(206, 60, 57, 0.6)!important;
     color: rgba(206, 60, 57, 0.6)!important;
     background-color: transparent;
   }
  }
</style>
