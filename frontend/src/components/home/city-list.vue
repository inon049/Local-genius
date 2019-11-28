<template>
  <section class="city-list">
      <h2>List title</h2>
      <section class="card-grid">
      <city-preview v-for="city in citiesToWhow" :key="city._id" :city="city"></city-preview>
      </section>
  </section>
</template>


<script>
   //COMPONENTS
    import cityPreview from './city-preview'
export default {
    data(){
        return {
            expandCityList:true,
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
        showCityPage(id){
            console.log('here1');
            this.$emit('showCityPage',id)
        }
    }
};
</script>