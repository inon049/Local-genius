<template>
  <section class="recent-chats">
    <div class="chat-title">
    <img :src="chats[0].toUser.imgUrl">
    <h1>Chats</h1>
    </div>
    <chat-preview @click.native="selectChat(chat)" v-for="(chat,idx) in chats" :key="idx" :chat="chat"></chat-preview>
  </section>
</template>

<script>
import chatPreview from "./chat-preview";
export default {
  props: {
    chats: Array
  },
  components: {
    chatPreview
  },
  methods:{
    selectChat(chat){
      this.$emit('selectChat',chat)
    }
  }
};
</script>
