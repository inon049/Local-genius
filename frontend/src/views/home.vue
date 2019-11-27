<template>
  <section class="home">
    <city-list :cities="cities"></city-list>
  </section>
</template>

<script>
// SERVICES
import cityService from '@/services/city.service'
// COMPONENTS
import cityList from '@/components/home/city-list'


export default {
  name: 'home',
  components: {
    cityList
  },
  data(){
    return{
      cities:[]
    }
  },
  async created(){
    var cities = await cityService.query()
    this.cities=cities
  }
}
</script>
