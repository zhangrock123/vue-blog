import Vue from 'vue';
import App from './App';
import router from './router';
import * as filters from './filters';
import store from './store';
import './assets/styles/index.less';

Vue.config.productionTip = false;

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  data: {},
  methods: {}
});
