<template>
  <section class="review-details">
    <div class="review-header">
      <div class="flex">
        <img :src="imgUrl"/>
        <div class="review-txt flex col">
          <div class="review-txt-title">
        <h2>{{review.byUser.name}}</h2>
        <div class="flex space-between">
        <span
          :title="+review.createdAt|moment('calendar')"
        >{{+review.createdAt | moment("calendar") }}</span>
        <span class="rate">★ {{review.rate}}</span>
        </div> 
        </div>
          <h3>{{review.title}}</h3>
          <p>{{review.txt}}</p>
      </div>
        </div>
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
      let imgUrl = this.review.byUser.imgUrl
        ? this.review.byUser.imgUrl
        : "https://srpc.ukzn.ac.za/wp-content/uploads/2018/05/profile-placeholder.png";
      return imgUrl;
    }
  }
};
</script>
