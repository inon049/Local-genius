<template>
  <transition name="fade">
    <section class="guide-filter-container" v-if="isOpen">
      <ul class="guide-interests-filter-list">
        <slot></slot>
        <div class="filter-header">
          <h2>What are you interested in?</h2>
        </div>
        <li
          v-for="(interest,idx) in interests"
          :key="idx"
          class="guide-filter-interest"
          @click="selectInterest(interest)"
          :class="{'interest-selected':interest.isSelected}"
        >
          {{interest.name.toUpperCase()}}
          <img
            :src="require('@/assets/img/interests/' + interest.name + '.png')"
          />
        </li>
        <div class="filter-btn-container">
          <button @click="setFilter">FIND</button>
        </div>
      </ul>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    interests :Array
  },
  data() {
    return {
      filterBy: {
        interests: []
      },
    };
  },
  methods: {
    selectInterest(interest) {
      //not reactive for some reason, not critical but important
      interest.isSelected = !interest.isSelected;
      const interests = this.filterBy.interests;
      const interestIdx = this.filterBy.interests.indexOf(interest.name);
      if (interestIdx < 0) {
        this.filterBy.interests.push(interest.name);
      } else this.filterBy.interests.splice(interestIdx, 1);
    },
    setFilter() {
      //CAN REMOVE JSONS TO MAKE FILTER IMMEDIATE
      this.$emit("filtered", JSON.parse(JSON.stringify(this.filterBy)));
    }
  },
  created() {},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
