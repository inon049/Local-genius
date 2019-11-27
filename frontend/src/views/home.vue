<template>
  <div class="home">
    <h1>Homepage</h1>
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
