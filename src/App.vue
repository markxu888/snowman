<template>
  <router-view></router-view>
  <main-tab-bar></main-tab-bar>
</template>

<script>

import MainTabBar from './components/content/mainTabbar/MainTabBar.vue'

export default {

  name: 'App',
  components: {
    MainTabBar
  }
}

</script>

<style>
@import url("./assets/css/base.css");
</style>
