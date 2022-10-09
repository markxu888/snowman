<template>
  <div id="home">
    <nav-bar>
      <template v-slot:center>小黑板</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar.vue"

import { getBlackBoardMult } from "network/blackboard.js"
export default {
  name: "blackboard",
  components: {
    NavBar
  },
  data() {
    return {
      result: null
    }
  },
  // created() {
  //   getBlackBoardMult().then(res => {
  //     this.result = res
  //   })
  // }
}  
</script>

<style>

</style>

