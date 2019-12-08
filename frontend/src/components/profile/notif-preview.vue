<template>
  <div class="notif-preview flex col" v-if="notification.from" >
      <h1>{{notification.txt}}</h1>
      <p>From {{notification.from.name}}</p>
      <div class="flex">
      <div class="img-container">
      <img :src="notification.from.imgUrl" alt="">
      </div>
      <p>{{notification.createdAt||moment('from')}}</p>
      </div>
      <!-- <pre>{{notification}}</pre> -->
  </div>
</template>

<script>
export default {
    props:{
     notification : Object  
    }

}
</script>

<style lang="scss" scoped>
.notif-preview{
.img-container{
  width: 50px;
    height: 50px;
}
 img{
   border-radius: 50%;
    width: 50px;
    height: 50px;
 } 
}
</style>
