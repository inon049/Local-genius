<template>
  <el-tabs v-model="activeName" type="border-card" @tab-click="setCmp">
    <el-tab-pane v-for="(page,idx) in cmps" :key="idx" :label="page" :name="page">
      <component @notifClicked="notifClicked" :is="activeName"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Overview from "./overview";
import Messenger from "./messenger";
import Bookings from "./booking-list";
import { eventBus } from "../../services/event.bus.service";
export default {
  data() {
    return {
      activeName: "Overview",
      cmps: ["Overview", "Messenger", "Bookings"],
      cmp: ""
    };
  },
  components: {
    Overview,
    Messenger,
    Bookings
  },
  created() {
    eventBus.$on("goMsg", () => {
      this.activeName = "Messenger";
    });
  },
  methods: {
    notifClicked(type) {
      console.log(type);
      if (type === "msg") this.activeName = "Messenger";
      else this.activeName = "Bookings";
    },
    setCmp(tab) {
      this.activeName = tab.paneName;
    }
  }
};
</script>


