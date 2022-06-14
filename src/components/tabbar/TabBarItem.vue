<template>
  <div id="tab-bar-item">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem"
}
</script>

<style scoped>
  #tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }

</style>
