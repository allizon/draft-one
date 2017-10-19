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

const mutations = {
  startTimer (state) {
    state.timer.state = 'running';
    console.log('starting ticks....');
  },

  stopTimer (state) {
    state.timer.state = 'idle';
    console.log('stopping timer!');
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});


