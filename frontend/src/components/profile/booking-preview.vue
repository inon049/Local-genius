<template>
  <section class="booking-preview">
    <img :src="imgUrl" />
    <h2>
      {{booking.byUser.name}}
      Is intrested in your service
      <span :title="booking.at" >At: {{ booking.at | moment("from") }}</span>
    </h2>
  </section>
</template>

<script>
export default {
  props: {
    booking: Object
  },
  computed: {
    imgUrl() {
      let imgUrl = this.booking.byUser.imgUrl
        ? this.booking.byUser.imgUrl
        : "https://srpc.ukzn.ac.za/wp-content/uploads/2018/05/profile-placeholder.png";
      return imgUrl;
    }
  }
};

//         "_id": "5de3b78c186a322e481ed3d9",
//         "createdAt": "new Date(2019,11,19)",
//         "at": "new Date(2019,11,20)",
//         "price": 60,
//         "attendees": 3,
//         "byUser": {
//             "_id": "5de37f341c9d440000854041",
//             "name": "borisov"
//         },
//         "toGuide": {
//             "_id": "5de394c81c9d440000854043",
//             "name": "dimitry"
//         }
</script>

<style lang="scss" >
.booking-preview {
    padding: 10px;
    height: 200px;
    img {
      width: 80px;
      border-radius: 50%;
    }
    h2 {
        padding: 10px 0px 0px 10px;
        display: inline-block;
        width: 100%;
        color: 000;
      position: absolute;
      top: 0;
      span {
        display: block;
        font-size: 14px;
      }
    }
}
</style>