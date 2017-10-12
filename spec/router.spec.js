import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../src/App.vue';

describe('App.vue', () => {
  beforeEach(function() {
    console.log('beforeEach');
    const fixture = '<div id="vue"></div>';
    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    // document.body.removeChild(document.getElementById('vue'));
  });

  it('Works some magic', () => {
    const Constructor = Vue.extend(App);
    const component = new Constructor({
      propsData: {
        someKey: 'some value'
      }
    }).$mount('#vue');

    console.log(component.$el);
    console.log(component.$el.textContent);
    expect(true).toBe(true);
  });

  it('Works some more magic', () => {
    console.log('another test');
  });
});
