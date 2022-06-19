<template>
  <h2>黑板</h2>  
</template>

<script>
  import {getBlackBoardMult} from "network/blackboard.js"
  export default {
    name: "blackboard",
    data() {
      return {
        result: null
      }
    },
    created() {
      getBlackBoardMult().then(res => {
        this.result = res
      })
    }
  }  
</script>

<style>

</style>

