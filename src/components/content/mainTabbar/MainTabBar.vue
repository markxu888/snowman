<template>
  <tab-bar>
    <tab-bar-item path="/blackboard" activeFontColor="blue">
      <template v-slot:icon>
        <img src="~assets/img/tabbar/blackboard.svg" alt="">
      </template>
      <template v-slot:active>
        <img src="~assets/img/tabbar/blackboardWrite.svg" alt="">
      </template>
      <template v-slot:text>
        <div >白板</div>
      </template>  
    </tab-bar-item>
    <tab-bar-item path="/snowman">
      <template v-slot:icon>
        <img src="~assets/img/tabbar/snowman.svg" alt="">
      </template>
      <template v-slot:active>
        <img src="~assets/img/tabbar/snowmanfight.svg" alt="">
      </template>
      <template v-slot:text>
        <div >打雪仗</div>
      </template>  
    </tab-bar-item>
    <tab-bar-item  path="/profile">
      <template v-slot:icon>
        <img src="~assets/img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:active>
        <img src="~assets/img/tabbar/homeing.svg" alt="">
      </template>
      <template v-slot:text>
        <div >回家</div>
      </template>  
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  
  import {TabBar,TabBarItem} from '../../common/tabbar/index'

  export default {
    name: 'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }

</script>