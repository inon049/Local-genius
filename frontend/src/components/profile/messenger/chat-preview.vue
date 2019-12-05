<template>
  <div class="chat-preview" v-if="chat">
    <img :src="imgUrl" />
    <div class="chat-preview-content">
      <h4>{{partnerName}}</h4>
      <div class="chat-preview-txt">
          <p v-if="chat.msgs.length">{{chat.msgs[0].txt.substring(0,10)}}...</p>
          <p v-else>You and {{partnerName}} have no chat history</p>
          <p v-if="chat.updatedAt">{{ +chat.updatedAt | moment('calendar', "July 10 2011")}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chat: Object,
    id:String
  },
  computed:{
    imgUrl(){
      if(this.id===this.chat.user._id){
        return this.chat.guide.imgUrl
      }else return this.chat.user.imgUrl
    },
    partnerName(){
      if(this.id===this.chat.user._id){
        return this.chat.guide.name
      }else return this.chat.user.name
    }
  },
  created() {
  }
};
</script>
