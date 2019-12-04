<template>
  <section class="review-form-container" v-if="guide">
    <h2>Write a review about {{guide.name}}</h2>
    <div class="add-review-container">
    <form @submit.prevent="saveReview" class="review-form">
      <div class="form-inputs">
        <input type="text" class="details-input" placeholder="Title" v-model="review.title" />
        <textarea class="details-input" placeholder="Your opinion matters!" v-model="review.txt"></textarea>
        <span>Rate</span>
        <el-radio-group text-color="black" fill="rgba(255, 90, 95, 0.23)" v-model="review.rate" size="medium">
              <el-radio-button  v-for="(num,idx) in 5" :key="idx" :label="num"></el-radio-button>
            </el-radio-group>
      </div>
    </form>
    <reviewDetails class="new-review" :review="review"></reviewDetails>
    </div>
      <button class="add-review-btn">Send</button>
  </section>
</template>

<script>
import reviewDetails from '../profile/review-details'
export default {
  props:{
    guide : Object
  },
  components:{
    reviewDetails
  },
  data() {
    return {
      review: {
        title:'',
        txt:'',
        rate:'',
        byUser:{

        }
      }
    };
  },

  methods: {
    saveReview() {
      if (!this.review.txt || !this.review.title || !this.review.rate) {
        return; // user msgm to fill all forms
      }
      this.$emit("saveReview", JSON.parse(JSON.stringify(this.review)));
      this.review = {};
    }
  },
  created() {
    this.review.createdAt = new Date()
    this.review.byUser.name = this.guide.name
    this.review.byUser.imgUrl = this.guide.profileImgUrl
  }
};
</script>

<style>
</style>