<template>
  <div class="actionsheet">
    <group>
      <x-switch :title="$t('声音开关')" v-model="show1"></x-switch>
      <x-switch :title="$t('Show cancel menu')" v-model="show2"></x-switch>
      <x-switch :title="$t('menu as tips')" v-model="show3"></x-switch>
      <x-switch :title="$t('Array menu')" v-model="show5"></x-switch>
    </group>

    <group :title="$t('prevent closing when clicking mask')">
      <x-switch :title="$t('Basic Usage')" v-model="show4"></x-switch>
    </group>

    <actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="false" show-cancel></actionsheet>

    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></actionsheet>

    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>

    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>

    <actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click"></actionsheet>

    <toast v-model="showSuccess">{{$t('Deleted~') }}</toast>
  </div>
</template>

<script>
    import Actionsheet from 'vux/src/components/actionsheet/index';
    import Group from 'vux/src/components/group/index';
    import cell from 'vux/src/components/cell/index';
    import XSwitch from 'vux/src/components/x-switch/index';
    import Toast from 'vux/src/components/toast/index';

    export default {
      data() {
        return {
          show1: false,
          menus1: {
            menu1: 'Share to friends',
            menu2: 'Share to timeline'
          },
          show2: false,
          menus2: {
            menu1: 'Take Photo',
            menu2: 'Choose from photos'
          },
          show3: false,
          show4: false,
          show5: false,
          menus5: [{
            label: 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
            type: 'info'
          }, {
            label: 'Primary',
            type: 'primary',
            value: 'primary'
          }, {
            label: 'Warn',
            type: 'warn'
          }, {
            label: 'Disabled',
            type: 'disabled'
          }, {
            label: 'Default'
          }],
          showSuccess: false,
          menus3: {
            'title.noop': 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
            delete: '<span style="color:red">Delete</span>'
          }
        };
      },
      methods: {
        click (key) {
          console.log(key);
        },
        onDelete () {
          this.showSuccess = true;
        }
      },
      components: {
        Actionsheet,
        Group,
        XSwitch,
        Toast,
        cell
      }
    };
</script>

<style lang="">

</style>
