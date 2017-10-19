require('../css/draft-one.sass');
require('../css/bootstrap.min.css');

import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';

const D1App = new Vue({
  router,
  store,
  el: '#vue',
  render: h => h( App )
});

D1App.$mount();

export default D1App;
