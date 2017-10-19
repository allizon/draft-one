import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  editor: {

  },
  settings: {

  },
  timer: {
    tick: 0,
    state: 'idle'
  }
};

const getters = {

};

const actions = {

};

const mutators = {

};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutators
});


