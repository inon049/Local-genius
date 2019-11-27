<template>
  <div class="home">
    <h2>inon</h2>
    <h1>Homepage</h1>
    <h2>testing</h2>
    <h1>dror</h1>
    <h1>Ori</h1>
    <h3>lala</h3>
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
