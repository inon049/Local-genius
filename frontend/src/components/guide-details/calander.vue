<template>
  <v-date-picker @input="dates" :value="null" color="red" is-inline :disabled-dates="disabledDates"/>
</template>

<script>
export default {
  props: {
    disabledDates: Array
  },
  data() {
    return {
      pickedDate:''
    };
  },
  methods: {
    dates(date) {
      console.log(date);
     this.pickedDate = date
     this.$emit('datePicked', date)
    }
  },
  computed: {
  },
 
};
</script>

<style>
</style>