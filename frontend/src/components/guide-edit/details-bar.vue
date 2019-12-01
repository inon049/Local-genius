<template>
  <section class="details-bar-container">
    <div class="details-bar">
      <router-link :to="{ name: `${page}`, params:{guideToEdit :guideToEdit}}" v-for="(title,page,idx) in pages" :key="idx">
        <h2>{{title}}</h2>
      </router-link>
    </div>
  </section>
</template>

<script>
import router from "@/router/index";
import {eventBus} from '../../services/event.bus.service.js'
export default {
  data() {
    return {
      pages: {
        basic: "Basic Information",
        interests : 'Interests',
        experience :'Experience page'
      },
      guideToEdit :{
           email:'',
                password:'',
                name:'',
                city:'',
                langs:[],
                type : "guide",
                profileImgUrl:'',
                imgUrls:[],
                desc:'',
                about:'',
                price:'',
                interests:[],
                questions:{},    
      }
    };
  },
  methods:{
      save(){
          this.guideToEdit = guideToEdit
      }
  },
  created(){
      eventBus.$on('saveInfo', (guideToEdit) => {
          console.log('guide details bar', guideToEdit);
      
    })
  }
};
</script>

<style>
</style>