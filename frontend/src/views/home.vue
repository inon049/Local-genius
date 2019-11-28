<template>
  <section class="home">
    <city-list @showCityPage="showCityPage" :cities="cities"></city-list>
  </section>
</template>

<script>
import router from '@/router/index'
import cityService from "@/services/city.service";
import cityList from "@/components/home/city-list";

export default {
  router,
  name: "home",
  components: {
    cityList
  },
  data() {
    return {
      cities: []
    };
  },
  async created() {
    var cities = await cityService.query();
    this.cities = cities;
  },
  methods:{
    showCityPage(id){
      console.log('here2');
      router.push(`/city/${id}`)
    }
  }
};
</script>
