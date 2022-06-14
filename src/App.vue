<template>
  <div>
    <TabBar>
      <TabBarItem>
        <img slot="icon" src="@\assets\img\tabbar\zhuye.svg" alt="">
        <div slot="text">主页</div>
      </TabBarItem>
  
    </TabBar>
  </div>
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
