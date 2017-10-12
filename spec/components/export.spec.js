import Vue from 'vue';
import Export from '../../src/Export.vue';

describe('Export.vue', () => {
  beforeEach(function() {

  });

  afterEach(function() {

  });

  it('Works some magic', () => {
    const Constructor = Vue.extend(Export);
    const component = new Constructor().$mount();
  });
});
