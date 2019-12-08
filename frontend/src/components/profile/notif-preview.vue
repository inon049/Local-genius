<template>
  <div class="notif-preview flex col" v-if="notification.from" >
      <h1>{{notification.txt}}</h1>
      <p>{{+notification.createdAt|moment('from')}}</p>
      <div class="flex align-center">
      <div class="img-container">
      <img :src="notification.from.imgUrl" alt="">
      </div>
      <p>From {{notification.from.name}}</p>
      </div>
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
  cursor: pointer;
  padding: 20px;
  border-bottom:1px solid rgba(48, 47, 47, 0.705);
  width: 40%;
  h1{
    color:#de4d5c;
  }
.img-container{
  width: 50px;
    height: 50px;
    margin-right:15px;
}
 img{
   border-radius: 50%;
    width: 50px;
    height: 50px;
 } 
}
</style>
