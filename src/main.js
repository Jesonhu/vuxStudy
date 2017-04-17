import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import App from './App';
import Home from './components/Home';

Vue.use(VueRouter);
Vue.use(Vuex);
let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
});
Vue.use(vuexI18n.plugin, store);

const routes = [{
  path: '/',
  component: Home
}];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');
