<template>
  <section v-if="chats.length" class="recent-chats" id="recent">
    <div class="chat-title">
    <img :src="user.profileImgUrl">
    <h1>Chats</h1>
    </div>
    <chat-preview :id="user._id" @click.native="selectChat(chat)" v-for="(chat,idx) in chats" :key="idx" :chat="chat"></chat-preview>
  </section>
</template>

<script>
import chatPreview from "./chat-preview";
export default {
  props: {
    chats: Array,
    user: Object
  },
  components: {
    chatPreview
  },
  methods:{
    selectChat(chat){
      this.$emit('selectChat',chat)
    }
  },

};
</script>
