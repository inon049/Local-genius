<template>
  <div class="home">
    <h1>Homepage</h1>
<<<<<<< HEAD
    <h1>Dror</h1>
  <h2>aaaa</h2>
  <h3>Dror</h3>
  <h1>l;j;lskjdf</h1>
=======
    <h2>testing</h2>
>>>>>>> dror
  </div>
</template>

<script>
import httpService from '@/services/http.service'
export default {
  name: 'home',
  components: {
  },
  async created(){
    var users = await httpService.get('user')
    console.log(users);
    
  }
}
</script>
