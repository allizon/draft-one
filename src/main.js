require('../css/draft-one.sass');
require('../css/bootstrap.min.css');

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router.js';

const D1App = new Vue({
  router,
  el: '#vue',
  render: h => h( App )
});
D1App.$mount();

export default D1App;
