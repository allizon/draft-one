<template>
  <div class="d1__editor" id="app">
		<navigation />
		<router-view />
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Timer from './timer.js';

const timer = new Timer();

export default {
  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components: {
    Navigation
  },

  getTimer () {
    return timer;
  }
}
</script>

<style lang="scss">
</style>

