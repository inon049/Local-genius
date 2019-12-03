<template>
  <div class="edit-guide-container mt-10">
    <h1>Submit your profile</h1>
    <el-tabs type="border-card" v-model="activeName" @tab-click="setCmp">
      <el-tab-pane v-for="(page,idx) in cmps" :key="idx" :label="page" :name="page">
        <component @start="start" @save="save" :is="activeName" :guideToEdit="guideToEdit"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Information from "../components/guide-edit/basic-info";
import Experience from "../components/guide-edit/guide-experience";
import Interests from "../components/guide-edit/guide-interests";
import Hello from "../components/guide-edit/edit-header";

export default {
  data() {
    return {
      isStart: true,
      activeName: "Hello",
      cmps: ["Hello","Information", "Interests", "Experience"],
      guideToEdit: {
        email: "",
        password: "",
        name: "",
        city: "",
        langs: [],
        type: "guide",
        profileImgUrl: "",
        imgUrls: [],
        desc: "",
        about: "",
        price: "",
        interests: [],
        questions: {}
      }
    };
  },
  components: {
    Information,
    Experience,
    Interests,
    Hello
  },
  methods: {
    currCmp(cmp) {
      return (this.cmp = cmp);
    },
    save(guide) {
      this.guideToEdit = guide;
      this.$store.dispatch({
        type: "addGuide",
        guide: JSON.parse(JSON.stringify(guide))
      });
    },
    start() {
      this.activeName = "Information";
    },
    setCmp(cmp) {
      this.isStart = false;
      this.activeName = cmp.paneName;
    }
  },
  async created() {
    const _id = this.$route.params._id;
    if (_id) {
      await this.$store.dispatch({ type: "getUserById", _id });
      this.guideToEdit = this.$store.getters.guide;
    }
  }
};
</script>
