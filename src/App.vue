<template>
  <div id="app">
    <div id="nav">
      <NavigationBar :pathname="$route.path" />
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import router from './router'
import NavigationBar from './components/NavigationBar.vue'

export default Vue.extend({
  components: {
    NavigationBar
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
@import './common';

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.App-header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}

.App-link {
  color: #61dafb;
}
</style>
