<template>
  <div class="d1__app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
// REMEMBER: Information flows down from the top. Events can bubble
// up from below.
import Navigation from './Navigation.vue';

export default {
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

