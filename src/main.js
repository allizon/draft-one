require('../css/styles.sass');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Editor from './Editor.vue';
import About from './About.vue';
import Export from './Export.vue';
import Settings from './Settings.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Editor },
    { path: '/about', component: About },
    { path: '/export', component: Export },
    { path: '/settings', component: Settings }
  ]
});

var D1App = new Vue({
  router,
  template: `
    <div class="d1__editor">
      <router-link to="/">home</router-link> |
      <router-link to="/about">about</router-link> |
      <router-link to="/export">export</router-link> |
      <router-link to="/settings">settings</router-link>

      <div>
        <router-view class="view"></router-view>
      </div>
    </div>
  `
}).$mount('#app');
