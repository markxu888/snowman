<template>
  <div class="bar-item" @click="itemclick">
    <div v-if="isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="active"></slot></div>
    <div :class="{active: !isActive}"><slot name="txt"></slot></div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return{
      isActive: true
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
  .active{
    font-size: 14px;
    color: blue;
  }

</style>
