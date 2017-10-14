<template>
  <div class="d1__editor" id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script type="text/javascript">
// REMEMBER: Information flows down from the top. Events can bubble
// up from below.
import Navigation from './Navigation.vue';

export default {
  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components: {
    Navigation
  }
}
</script>

<style lang="scss">
</style>

