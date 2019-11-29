<template>
  <section class="guide-filter-container">
    <h2>Find the best guide for YOU!</h2>
    <ul class="guide-interests-filter-list">
      <li
        v-for="(interest,idx) in interests"
        :key="idx"
        class="guide-filter-interest"
        @click="selectInterest(interest); markSelection($event)"
      >
        {{interest.toUpperCase()}}
        <img
          :src="require('@/assets/img/interests/' + interest + '.png')"
        />
      </li>
    </ul>
    <button @click="setFilter">FIND</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        interests: []
      },
      interests: [
        "Culture",
        "Coffee",
        "Shopping",
        "Music",
        "NightLife",
        "Animals",
        "OutDoor",
        "Food",
        "Photography",
        "Luxury",
        "Architecture"
      ]
    };
  },
  methods: {
    //   selectInterest(interest) {                          //IS REACTIVE
    //       this.filterBy.interests.push(interest);
    //   console.log(this.filterBy);

    selectInterest(interest) {
      //not reactive for some reason, not critical but important
      const interests = this.filterBy.interests;
      const interestIdx = this.filterBy.interests.indexOf(interest);
      if (interestIdx < 0) {
        this.filterBy.interests.push(interest);
      } else this.filterBy.interests.splice(interestIdx, 1);
      console.log(this.filterBy.interests);
    },
    markSelection(ev) {
      ev.stopPropagation();
      ev.target.classList.toggle("interest-selected");
    },
    setFilter() {
      //CAN REMOVE JSONS TO MAKE FILTER IMMEDIATE
      this.$emit("filtered", JSON.parse(JSON.stringify(this.filterBy)));
    }
  }
};
</script>

<style>
</style>
