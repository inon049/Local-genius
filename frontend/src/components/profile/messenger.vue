<template>
  <section class="messenger-container">
    <recent-chats :chats="recentChats" @selectChat="selectChat"></recent-chats>
    <chat :user="user" :chat="selectedChat"></chat>
  </section>
</template>

<script>
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
      user: null,
      selectedChat: null
    };
  },
  methods: {
    selectChat(chat) {
      this.selectedChat = chat;
    },
    computed: {
      recentChats() {
        return this.$store.getters.chats;
      }
    }
  },
  created() {
    this.$store.dispatch({ type: "loadChats" });
    this.user = this.$store.getters.loggedInUser;
  }
};
</script>