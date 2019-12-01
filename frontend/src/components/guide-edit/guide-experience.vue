<template>
<div>
       <h1>Tell us about yourself</h1>
   <div class="basic-info-container flex row space-around">
     <div class="first-section flex col">
     <h2>Write a short descripsion about your self (Up to 180 characters)</h2>
     <input v-model="guideToEdit.desc" :maxlength="180" type="text" class="details-input" placeholder="Short description">
     <h2>Tell us more about yourself</h2>
     <textarea v-model="guideToEdit.about" type="email" class="details-input" placeholder="More about yourself"/>
     
     <div class="flex space-between">
     <button @click="save" class="save-btn">SAVE</button>
     <router-link class="next-btn" to="/guide/edit/interests">NEXT</router-link>
     </div>
     </div>
 </div>
 </div>
</template>

<script>
import { eventBus } from '../../services/event.bus.service'
export default {
    props:{
        guideToEdit : Object
    },
    data(){
        return{
           questions :{},
           guide:{}
        }
    },
    methods:{
        save(){
            eventBus.$emit('saveInfo',this.guide)
        }
    },
    created(){
        this.guide = this.guideToEdit
    }

}
</script>

<style>

</style>