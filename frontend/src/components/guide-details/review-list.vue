<template>
  <ul class="review-list">
    <li v-for="review in reviews" :key="review._id">
      <img :src="review.byUser.imgUrl" />
      <section>
        <div class="writer-details">
          <h4>By {{review.byUser.name}}</h4>
          <p muted>Written at {{date(review.createdAt)}}</p>
        </div>
        <div class="review-content">
          <h5>{{review.title}}</h5>
          {{review.txt}}
        </div>
      </section>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    reviews: Array
  },
  date() {
    return {};
  },
  methods: {
    date(timeStamp) {
      var date = new Date(timeStamp);
      console.log(date);

      return date.toLocaleString();
    }
  },
  watch: {}
};
</script>

<style>
</style>