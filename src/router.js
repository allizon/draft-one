import Vue from 'vue';
import VueRouter from 'vue-router';
import Editor from './Editor.vue';
import About from './About.vue';
import Export from './Export.vue';
import Settings from './Settings.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Editor },
    { path: '/about', component: About },
    { path: '/export', component: Export },
    { path: '/settings', component: Settings }
  ]
});
