<template>
  <section class="messenger">
    <recent-chats :chats="recentChats" @selectChat="selectChat"></recent-chats>
    <chat></chat>
  </section>
</template>

<script>
//SERVICES//
import msgService from '@/services/msg.service'

//COMPONENTS//
import chat from "./messenger/chat";
import recentChats from "./messenger/recent-chats";
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
};
</script>