<template>
  <section class="review-form-container">
    <h2>Write a review:</h2>
    <form @submit.prevent="saveReview" class="review-form">
      <div class="form-inputs">
        <p>Review Title:</p>
        <input type="text" placeholder="Title" v-model="review.title" />
        <p>Review Text:</p>
        <textarea placeholder="Your opinion matters!" v-model="review.txt"></textarea>
        <div class="rate-select">
          <p>Rate:</p>
          <v-select v-model="review.rate" :options="[1,2,3,4,5]" />
        </div>
      </div>
      <button>Send</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      review: {}
    };
  },
  computed: {},
  methods: {
    saveReview() {
      if (!this.review.txt || !this.review.title || !this.review.rate) {
        return; // user msgm to fill all forms
      }
      this.$emit("saveReview", JSON.parse(JSON.stringify(this.review)));
      this.review = {};
    }
  },
  async created() {}
};
</script>

<style>
</style>