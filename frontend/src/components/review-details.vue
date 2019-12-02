<template>
  <section class="review-details">
    <div class="review-header">
      <img :src="imgUrl" />
      <h2>
        {{review.byUserName}}
        <span>{{ review.createdAt | moment("from") }}</span>
              <span>★ {{review.rate}}</span>
      </h2>
    </div>
    <div class="review-content">
      <h3>{{review.title}}</h3>
      <div>{{review.txt}}</div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    review: Object
  },
  computed: {
    imgUrl() {
      let imgUrl = this.review.byUserImg
        ? this.review.byUserImg
        : "https://srpc.ukzn.ac.za/wp-content/uploads/2018/05/profile-placeholder.png";
      return imgUrl;
    }
  }
};
</script>
