import Vue from 'vue';
import VueRouter from 'vue-router';
import Editor from '../src/Editor.vue';

describe('App.vue', () => {
  beforeEach(function() {

  });

  afterEach(function() {

  });

  it('Sets placeholder text', () => {
    expect(Editor.data().placeholder).toBe('This is placeholder text.');
  });

  it('Works some more magic', () => {
    const Constructor = Vue.extend(Editor);
    const component = new Constructor().$mount();
    console.log(component.$el);
  });
});
