<template>
  <div class="guide-experience-container" v-if="guide">
    <h1>Tell us about yourself</h1>
    <div class="basic-info-container flex row space-around">
      <div class="first-section flex col">
        <h2>Write a short descripsion about your self (Up to 180 characters)</h2>
        <input
          v-model="guideToEdit.desc"
          :maxlength="180"
          type="text"
          class="details-input"
          placeholder="Short description"
        />
        <h2>Tell us more about yourself</h2>
        <textarea
          v-model="guideToEdit.about"
          type="email"
          class="details-input"
          placeholder="More about yourself"
        />
        <h2>Add photos that describes you best</h2>
        <label class="input-label" for="file"><img src="../../assets/img/upload.png">
        <input id="file" class="upload-input" @change="upload" type="file" multiple/>
        </label>
        <div class="imgs-input-preview" v-if="this.guide.imgUrls">
          <div v-for="(img) in this.guide.imgUrls" :key="img"><img :src="img" /><button  @click="deleteImg(img)">X</button></div>
        </div>
        <h2>Pick some questions that you connect with</h2>
        <div class="quest flex col" v-for="(quest,idx) in questions" :key="idx">
          <label :for="idx">{{quest}}</label>
          <input :id="idx" type="text" />
        </div>
        <button @click="save" class="save-btn">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
import { cloudinary } from "../../services/cloudinary.service";
export default {
  props: {
    guideToEdit: Object
  },
  data() {
    return {
      fileList: [],
      selectedQuest: [],
      questions: [
        "WHO’S YOUR HERO (DEAD OR ALIVE) AND WHERE WOULD YOU TAKE THEM TO SHOW THEM A GOOD TIME?",
        "IF TOMORROW WAS YOUR LAST DAY IN YOUR CITY BEFORE YOU LEFT FOR GOOD, HOW AND WHERE WOULD YOU SPEND IT?",
        "WHAT’S THE THING YOU LOVE DOING THAT ISN’T WORK, RELATIONSHIP OR FAMILY RELATED?",
        "WHAT ARE YOU WORKING ON THESE DAYS?",
        "WHAT’S THE SPOT IN YOUR CITY YOU WOULDN’T BE CAUGHT DEAD IN?",
        "WHAT’S YOUR FAVORITE VACATION CITY IN THE WORLD AND WHY?",
        "NAME SOME SPOTS IN YOUR CITY THAT ARE GOOD FOR A TINDER DATE",
        "WHAT MAKES YOU HAPPY?",
        "WHAT’S YOUR CHOICE OF TRANSPORTATION IN YOUR CITY AND WHY?",
        "WHAT ARE THE SPOTS A FIRST-TIME VISITOR CAN’T MISS?",
        "WHERE DO YOU GO IF YOU HAVE TWO HOURS TO KILL?",
        "WHAT WOULD MAKE A PERFECT DAY IN THE SUN FOR YOU?",
        "WHAT’S THE THING YOU LOVE TO DO IN YOUR CITY THAT YOU NEVER GET TO DO?",
        "WHAT DO YOU DO AND WHY DO YOU DO IT?",
        "WHAT’S YOUR DREAM JOB?",
        "WHAT DRIVES YOU MAD THESE DAYS?"
      ],
      guide: {}
    };
  },
  methods: {
    async upload(ev) {
      var files = [];
      for (let i in ev.target.files) {
        if (typeof ev.target.files[i] === "object")
          files.push(ev.target.files[i]);
      }
      var urls = files.forEach(async file => {
        var { url } = await cloudinary.uploadImg(file);
        this.guide.imgUrls.push(url);
      });
      console.log(this.guide.imgUrls, "aaaaaaa");
    },
    save() {
      this.$emit("saveInfo", this.guide);
    },
    deleteImg(img) {
      var idx = this.guide.imgUrls.findIndex(img => {
        return img === img;
      });
      this.guide.imgUrls.splice(idx, 1);
    }
  },
  created() {
    if (this.guideToEdit) this.guide = this.guideToEdit;
  }
};
</script>

