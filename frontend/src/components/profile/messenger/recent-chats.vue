<template>
  <section class="recent-chats">
    <h1>recent chts</h1>
    <chat-preview @click="selectChat(chat)" v-for="(chat,idx) in chats" :key="idx" :chat="chat"></chat-preview>
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
