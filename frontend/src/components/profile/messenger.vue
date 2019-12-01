<template>
  <section v-if="recentChats.length" class="messenger">
    <recent-chats :chats="recentChats" @selectChat="selectChat"></recent-chats>
    <chat></chat>
  </section>
</template>

<script>
//SERVICES//
import msgService from '@/services/msg.service'

//COMPONENTS//
import chat from "./chat";
import recentChats from "./recent-chats";
export default {
  components: {
    recentChats,
    chat
  },
  data() {
    return {
      recentChats:[],
      selectedChat: null
    };
  },
  methods: {
    selectChat(chat) {
      this.selectedChat = chat;
    }
  },
  async created() {
    let userChats = await msgService.query();
    this.recentChats = userChats;
    console.log(userChats,'in messenger');
    
  }
};
</script>