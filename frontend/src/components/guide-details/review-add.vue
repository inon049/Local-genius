<template>
  <section class="review-form-container" v-if="guide">
    <h2>Write a review about {{guide.name}}</h2>
    <div class="add-review-container">
      <form @submit.prevent="saveReview" class="review-form">
        <div class="form-inputs">
          <input type="text" class="details-input" placeholder="Title" v-model="review.title" />
          <textarea class="details-input" placeholder="Your opinion matters!" v-model="review.txt"></textarea>
          <span>Rate</span>
          <el-select class="select" v-model="review.rate" placeholder="Pick a rate">
            <el-option
              v-for="(num,idx) in 5" :key="idx"
              :label="num"
              :value="num"
            ></el-option>
          </el-select>
        
          <button class="add-review-btn">Send</button>
        </div>
      </form>
      <reviewDetails :loggedInUser="loggedInUser" class="new-review" :review="review"></reviewDetails>
    </div>
  </section>
</template>

<script>
import reviewDetails from "../profile/review-details";
export default {
  props: {
    guide: Object,
    loggedInUser: Object
  },
  components: {
    reviewDetails
  },
  data() {
    return {
      review: {
        title: "",
        txt: "",
        rate: "",
        byUser: {}
      }
    };
  },

  methods: {
    saveReview() {
      if (!this.review.txt || !this.review.title || !this.review.rate) {
        return; // user msgm to fill all forms
      }
      this.$emit("saveReview", JSON.parse(JSON.stringify(this.review)));
      this.review.title = "";
      this.review.txt = "";
      this.review.rate = "";
      this.review.createdAt = new Date();
    }
  },
  created() {
    this.review.createdAt = new Date();
    this.review.byUser.name = this.loggedInUser.name;
    this.review.byUser.imgUrl = this.loggedInUser.profileImgUrl;
  }
};
</script>

<style>
</style>