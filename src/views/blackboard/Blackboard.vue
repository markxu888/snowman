<template>
  <h2>黑板</h2>  
</template>

<script>
  import {getBlackBoardMilt} from "network/blackboard"
  export default {
    name: "blackboard",
    data() {
      return {
        result: null
      }
    },
    created() {
      getBlackBoardMilt().then(res => {
        this.result = res
      })
    }
  }  
</script>

<style>

</style>

