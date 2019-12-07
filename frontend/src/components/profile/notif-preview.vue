<template>
  <div class="notif-preview">
      <h1>New {{notification.type}}</h1>
      <p>{{notification.txt}}</p>
  </div>
</template>

<script>
export default {
    props:{
     notification : Object  
    }

}
</script>

<style>

</style>