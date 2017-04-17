<template>
  <div>
    <!--
      属性props
      lock-x lock-y 方向锁定不指定值默认锁定
      scrollbar-x scrollbar-y 是否显示滚动条不指定值默认不显示
      :bounce 两端是否有回弹，不指定值默认有
      :use-pullup="true" 是否使用上拉组件，不指定值 默认false
      :use-pulldown = 'false' false可以不用写
      :pullup-config="pullupConfig" 是否使用下拉组件，不指定值默认false 同 :pulldown-config
      height="200px" 滚动框高度 减去头部尾部高度 如 height="-40"
      value 对象，上拉或下拉的状态双向绑定，使用v-model绑定，pulldownStatus及pullupStatus

      scroller 只能有一个唯一的子元素 div

      事件
      @on-scroll 容器滚动时触发，参数为对象包含top和left位置
      @on-pulldown-loading 用户触发下拉刷新状态 监听该事件可以实现下拉加载
      @on-pullup-loading ...

      methods:
      reset	(position, duration, easing)	在内容变化(v-for渲染，异步数据加载)后需要调用，用以重新渲染，
            避免新加的内容无法上拉看到，一般在 $nextTick 回调里调用。
            easing 可以为 ease-in, ease-in-out, ease, bezier(n, n, n, n)
      donePullup	 	设置上拉刷新操作完成，在数据加载后执行
      disablePullup	 	禁用上拉刷新，在没有更多数据时执行
      enablePullup	 	启用上拉刷新插件
      donePulldown	 	设置下拉刷新操作完成，在数据加载后执行
   -->
    <group>
      <cell is-link title="pullup" link="/component/pullup">Pullup</cell>
      <cell is-link title="pulldown" link="/component/pulldown">Pulldown</cell>
      <cell is-link title="pulldownpullup" link="/component/pulldown-pullup">PulldownPullup</cell>
    </group>

    <divider>{{ $t('水平没有滚动条') }}</divider>
    <p>lock-y lock-x 锁定方向</p>
    <p>:scrollbar-x=false不显示scrollbar-x显示； 是否显示x或y方向上滚动条</p>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>{{ $t('水平方向有滚动条') }}</divider>
    <scroller lock-y scrollbar-x>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>{{ $t('水平方向没有回弹 :bounce=false') }}</divider>
    <scroller lock-y scrollbar-x :bounce=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>{{ $t('垂直滚动+数值') }} scrollTop: {{scrollTop}}</divider>
    <scroller lock-x height="200px" @on-scroll="onScroll" ref="scrollerEvent">
      <div class="box2">
        <p v-for="i in 80">placeholder {{i}}</p>
      </div>
    </scroller>
    <x-button type="primary" @click.native="$refs.scrollerEvent.reset({top:0})">重置</x-button>

    <divider>{{ $t('垂直滚动框显示滚动条') }}</divider>
    <scroller lock-x scrollbar-y height="200px" ref="scroller">
      <div class="box2">
        <p v-for="i in 20" v-if="showList1">placeholderList1 {{ i }}</p>
        <p v-for="i in 10" v-if="!showList1">placeholderList2 {{ i }}</p>
        <x-button style="margin:10px 0;" type="primary" @click.native="onClickButton">{{ $t('Button') }}</x-button>
        <group>
          <cell @click.native="onCellClick" title="Title" value="Value"></cell>
        </group>
      </div>
    </scroller>
    <x-button @click.native="changeList" type="primary">{{ $t('切换显示列表') }}</x-button>
  </div>
</template>


<script>
  import { Scroller, Divider, Spinner, XButton, Group, Cell } from 'vux';


  export default {
    components: {
      Scroller,
      Divider,
      Spinner,
      XButton,
      Group,
      Cell
    },
    data () {
      return {
        showList1: true,
        scrollTop: 0
      };
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scrollerEvent.reset({top: 0}); // 内容变化后需要调用
    });
    },
    methods: {
      onScroll (pos) { // 滚动监控函数
        console.log('on scroll', pos);
        this.scrollTop = pos.top;
      },
      onCellClick () {
        window.alert('cell click');
      },
      onClickButton () {
        window.alert('click');
      },
      changeList () {
        this.showList1 = !this.showList1;
        this.$nextTick(() => {
          this.$refs.scroller.reset({
          top: 0
        });
      });
      }
    }
  };
</script>

<style scoped>
  .box1 {
    height: 100px;
    position: relative;
    width: 1490px;
  }
  .box1-item {
    width: 200px;
    height: 100px;
    background-color: #ccc;
    display:inline-block;
    margin-left: 15px;
    float: left;
    text-align: center;
    line-height: 100px;
  }
  .box1-item:first-child {
    margin-left: 0;
  }
  .box2-wrap {
    height: 300px;
    overflow: hidden;
  }
</style>
