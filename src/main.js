require('../css/styles.sass');

import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

const D1App = new Vue({
  router,
  el: '#vue',
  render: h => h( App )
});
D1App.$mount();

export default D1App;
