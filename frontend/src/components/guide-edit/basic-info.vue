<template>
 <div class="basic-info-container flex row space-around">
     <div class="first-section flex col">
     <h2>Full Name</h2>
     <input v-model="guideToEdit.name" type="text" class="details-input" placeholder="Enter your full name">
     <h2>Email</h2>
     <input v-model="guideToEdit.email" type="email" class="details-input" placeholder="Enter your email">
     <h2>Password</h2>
     <input v-model="guideToEdit.password" type="text" class="details-input" placeholder="Enter a password">
     </div>
     <div class="second-section flex col">
     <h2>Languages</h2>
     <v-select multiple v-model="guideToEdit.langs" :options="['Spanish','Chinese','Italian','Russian','English','Greek','French']" />
     <h2>Location</h2>
     <h3>Which city will you host your experience in?</h3>
     <input  v-model="guideToEdit.city" type="text" class="details-input" placeholder="Enter city">
     <div class="flex space-between">
     <button @click="save" class="save-btn">SAVE</button>
     <router-link class="next-btn" to="/guide/edit/interests">NEXT</router-link>
     </div>
     </div>
 </div>
</template>

<script>
import { eventBus } from "../../services/event.bus.service.js"

export default {
    props:{
        guideToEdit : Object
    },
    methods:{
        save(){
            eventBus.$emit('saveInfo', this.guideToEdit)
            console.log('guide basic',this.guideToEdit);
        }
    },
    created(){
        console.log('created', this.guideToEdit);
    }
}
</script>

<style>

</style>