<template>
  <div class="edit-guide-container">
    <h1>Submit your profile</h1>
    <el-tabs  type="border-card"  @tab-click="setCmp">
      <el-tab-pane  v-for="(page,title,idx) in cmps" :key="idx" :label="page" :name="title">
        <component  @save="save" :is="cmp" :guideToEdit="guideToEdit"></component>
      </el-tab-pane>
    </el-tabs>
    <edit-header @start="start" v-if="isStart"></edit-header>
  </div>
</template>

<script>
import detailsBar from "../components/guide-edit/details-bar";
import basicInfo from "../components/guide-edit/basic-info";
import guideExperience from "../components/guide-edit/guide-experience";
import guideInterests from "../components/guide-edit/guide-interests";
import editHeader from "../components/guide-edit/edit-header";

export default {
  data() {
    return {
      isStart: true,
      activeName:[ basicInfo, guideInterests, guideExperience],
      // cmps:["hello", "Basic Information", "Interests", "Experience page"],
      cmps:{
        // editHeader: "hello",
        basicInfo: "Basic Information",
        guideInterests: "Interests",
        guideExperience: "Experience page"
      },
      // },
      cmp: editHeader,
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
    detailsBar,
    basicInfo,
    guideExperience,
    guideInterests,
    editHeader
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
      this.cmp = basicInfo;

    },
    setCmp(cmp) {
      this.isStart = false
      this.cmp = cmp.paneName;
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
