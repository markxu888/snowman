<template>
  <div class="bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>

export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeFontColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeFontColor} : {}
    }
  },
  methods: {
    itemclick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
  .bar-item{
    flex: 1;
    text-align: center;
    /* height: 49px; */
    font-size: 14px;
  }
  .bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 0px;
  }

</style>
