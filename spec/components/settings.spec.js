import Vue from 'vue';
import Settings from '../../src/Settings.vue';

describe('Settings.vue', () => {
  beforeEach(function() {

  });

  afterEach(function() {

  });

  it('Works some magic', () => {
    const Constructor = Vue.extend(Settings);
    const component = new Constructor().$mount();
  });
});
