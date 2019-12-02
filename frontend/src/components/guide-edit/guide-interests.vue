<template>
  <div class="guide-interests-container" v-if="guide">
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
    <div class="flex justify-center">
      <button @click="save" class="save-btn">SAVE</button>
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
      guide:{},
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
      this.guide.interests = this.selectedInterests.interests;
      this.$emit("save", this.guide);
    },
  
  },
  created() {
    if(this.guideToEdit) this.guide = this.guideToEdit
    this.guideToEdit.interests.forEach(interest => {
      if (interest.isSelected) 
     var selected = this.interests.find(localInterest => localInterest.name === interest.name)
     selected.isSelected = true;
    });
  }
};
</script>

<style>
</style>