<template>
  <div class="basic-info-container flex row space-around" v-if="guide">
    <div class="first-section flex col">
      <h2>Full Name</h2>
      <input
        v-model="guide.name"
        type="text"
        class="details-input"
        placeholder="Enter your full name"
      />
      <h2>Email</h2>
      <input
        v-model="guide.email"
        type="email"
        class="details-input"
        placeholder="Enter your email"
      />
      <h2>Password</h2>
      <input
        v-model="guide.password"
        type="text"
        class="details-input"
        placeholder="Enter a password"
      />
    </div>
    <div class="second-section flex col">
      <h2>Languages</h2>
      <v-select
        multiple
        v-model="guide.langs"
        :options="['Spanish','Chinese','Italian','Russian','English','Greek','French']"
      />
      <h2>Location</h2>
      <h3>Which city will you host your experience in?</h3>
      <input v-model="guide.city" type="text" class="details-input" placeholder="Enter city" />
      <div class="flex space-between">
 
        <button @click="save" class="save-btn">SAVE</button>
      </div>
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
      guide: {}
    };
  },
  methods: {
    save() {
      this.$emit("save", this.guide);

    },

  },
  created() {
      if(this.guideToEdit) this.guide = this.guideToEdit;
  }
};
</script>

