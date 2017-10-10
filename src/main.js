require('../css/styles.sass');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

const Home     = { template: '<div>The Editor</div>' };
const About    = { template: '<div>About DraftOne</div>' };
const Export   = { template: '<div>Export</div>' };
const Settings = { template: '<div>Settings</div>' };

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
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
      <router-link to="/export">export</router-link> |
      <router-link to="/about">about</router-link> |
      <router-link to="/settings">settings</router-link>

      <div>
        <router-view class="view"></router-view>
      </div>
    </div>
  `
}).$mount('#app');
