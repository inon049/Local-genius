<template>
  <section class="city-filter">
    <input v-model="city._id" @change="goToCity" list="cities" type="text" placeholder="Where do you wanna go?" />
    <datalist id="cities">
      <option  v-for="city in cities" :key="city._id" :label="city.name" :value="city._id"></option>
    </datalist>
  </section>
</template>

<script>
export default {
  props: {
    cities: Array
  },
  data(){
    return {
      city:{
        _id:''
      } 
    }
  },
  methods:{
    goToCity(a){
      console.log(a.target.value);
      // this.$route.push(``)
      console.log(this.city, 'city');
    }
  }
};
</script>
