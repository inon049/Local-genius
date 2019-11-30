<template>
  <v-date-picker
  @input="dates"
  :value="null"
  color="red"
  is-inline
  :disabled-dates='pickedDate'
/>
</template>

<script>
export default {
  data(){
    return {
      pickedDate : []
    }
  },
  methods:{
    dates(ev){
      this.pickedDate.push(ev)
    }
  },
 computed:{
   disabledDates(){
     
   }
 }

}
</script>

<style>

</style>