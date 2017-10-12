import Vue from 'vue';

function getElement (vueComponent) {
  const Constructor = Vue.extend(vueComponent);
  const component = new Constructor().$mount();
  return component.$el;
}

export { getElement }
