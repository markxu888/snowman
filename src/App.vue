<template>
  <tab-bar>
    <tab-bar-item>
      <template v-slot:icon>
        <img src="@/assets/img/tabbar/blackboard.svg" alt="">
      </template>
      <template v-slot:active>
        <img src="@/assets/img/tabbar/blackboardWrite.svg" alt="">
      </template>
      <template v-slot:txt>
        <div >黑板</div>
      </template>  
    </tab-bar-item>
    <tab-bar-item>
      <template v-slot:icon>
        <img src="@/assets/img/tabbar/snowman.svg" alt="">
      </template>
      <template v-slot:active>
        <img src="@/assets/img/tabbar/snowmanfight.svg" alt="">
      </template>
      <template v-slot:txt>
        <div >打雪仗</div>
      </template>  
    </tab-bar-item>
    <tab-bar-item>
      <template v-slot:icon>
        <img src="@/assets/img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:active>
        <img src="@/assets/img/tabbar/homeing.svg" alt="">
      </template>
      <template v-slot:txt>
        <div >回家</div>
      </template>  
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  
  import TabBar from '@/components/tabbar/TabBar.vue'
  import TabBarItem from '@/components/tabbar/TabBarItem.vue'

  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarItem
    }
  }

</script>

<style >
  @import url("./assets/css/base.css");


</style>
