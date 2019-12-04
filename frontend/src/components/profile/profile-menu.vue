<template>
  <!-- <div> -->
    <el-tabs v-model="activeName" type="border-card" @tab-click="setCmp">
      <el-tab-pane v-for="(page,idx) in cmps" :key="idx" :label="page" :name="page">
        <component :is="activeName"></component>
      </el-tab-pane>
    </el-tabs>
  <!-- </div> -->
</template>

<script>
import Overview from "./overview";
import Messenger from "./messenger";
export default {
  data() {
    return {
      activeName:'Overview',
      cmps: ["Overview", "Messenger"],
      cmp: ''
    };
  },
  methods:{
    setCmp(tab){
      this.activeName = tab.paneName
    }
  },
  components: {
    Overview,
    Messenger
  }
};
</script>


