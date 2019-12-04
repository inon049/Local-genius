<template>
    <el-tabs v-model="activeName" type="border-card" @tab-click="setCmp">
      <el-tab-pane v-for="(page,idx) in cmps" :key="idx" :label="page" :name="page">
        <component :is="activeName"></component>
      </el-tab-pane>
    </el-tabs>
</template>

<script>
import Overview from "./overview";
import Messenger from "./messenger";
import Bookings from "./booking-list";
export default {
  data() {
    return {
      activeName:'Overview',
      cmps: ["Overview", "Messenger","Bookings"],
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
    Messenger,
    Bookings
  }
};
</script>


