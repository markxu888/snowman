<template>
  <div class="back-top">
    <img src="~assets/img/backtop/backtop.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 8px;
    bottom: 60px;
  }

  .back-top img {
    width: 50px;
    height: 50px;
  }

</style>
