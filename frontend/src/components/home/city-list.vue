<template>
  <section class="city-list card-grid">
      <city-preview v-for="city in citiesToWhow" :key="city.id" :city="city"></city-preview>
  </section>
</template>


<script>
   //COMPONENTS
    import cityPreview from './city-preview'
export default {
    data(){
        return {
            expandCityList:false,
            expandGuideList:false
        }
    },

    props:{
        cities:Array
    },
    components:{
        cityPreview
    },
    computed:{
        citiesToWhow(){
            if(!this.expandCityList){
                return this.cities.splice(0,4)
            }else return this.cities
        }
    },
    methods:{
        showCityPage(){
            
        }
    }
};
</script>