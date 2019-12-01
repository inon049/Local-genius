<template>
  <div class="guide-interests-container">
    <ul class="guide-interests-list-picker">
      <div class="interests-header">
        <h2>What are your interestes?</h2>
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
    </ul>
    <div class="guide-btns flex space-between">
      <button @click="save" class="save-btn">SAVE</button>
      <router-link class="next-btn" to="/guide/edit/experience">NEXT</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guideToEdit: Object
  },
  data() {
    return {
      selectedInterests:{interests:[]},
      interests: [
        { name: "Culture", isSelected: false },
        { name: "Coffee", isSelected: false },
        { name: "Shopping", isSelected: false },
        { name: "Music", isSelected: false },
        { name: "NightLife", isSelected: false },
        { name: "Animals", isSelected: false },
        { name: "OutDoor", isSelected: false },
        { name: "Food", isSelected: false },
        { name: "Photography", isSelected: false },
        { name: "Luxury", isSelected: false },
        { name: "Architecture", isSelected: false },
        { name: "Science", isSelected: false }
      ]
    };
  },
  methods: {
    selectInterest(interest) {
      interest.isSelected = !interest.isSelected;
      const interests = this.selectedInterests.interests;
      const interestIdx = this.selectedInterests.interests.indexOf(interest.name);
      if (interestIdx < 0) {
        this.selectedInterests.interests.push(interest.name);
      } else this.selectedInterests.interests.splice(interestIdx, 1);
    },
    save() {
      this.guideToEdit.interests = this.selectedInterests.interests;
      eventBus.$emit("saveInfo", this.guideToEdit);
    }
  },
  created() {
  }
};
</script>

<style>
</style>