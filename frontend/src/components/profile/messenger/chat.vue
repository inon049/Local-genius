<template>
  <section id="recent" class="chat" v-if="chat!==null">
    <div class="chat-header">
      <img :src="chat.user.imgUrl" />
      <h1>{{chat.user.name}}</h1>
    </div>
    <div class="chat-txt">
      <div class="msg" :class="checkMsg(msg)" v-for="(msg,idx) in chat.msgs" :key="idx">
        <img :src="checkUrl(msg)" />
        <p>{{msg.txt}}</p>
      </div>
    </div>
    <form @submit.prevent="sendMsg" class="input-msg">
      <input type="text" v-model="msg.txt" placeholder="Type a message..." />
      <button>Send</button>
    </form>
  </section>
</template>
//
<script>
import socketService from "@/services/socket.service";
export default {
  props: {
    user: Object,
    chat: Object
  },
  data() {
    return {
      msg: {
        txt: "",
        isRead: false
      },

      isIncoming: false
    };
  },
  methods: {
    checkMsg(msg) {
      if (msg.in) return "incoming-msg";
      else return "sent-msg";
    },
    checkUrl(msg) {
      if (msg.fromId === this.loggedInUser._id && this.loggedInUser._id === this.chat.user._id)
       return this.chat.guide.imgUrl;
      else return this.chat.user.imgUrl;
    },
    sendMsg() {
      if (this.msg.txt) {
        this.msg.fromId = this.user._id;
        this.msg.toId =
          this.chat.guide._id === this.user._id
            ? this.chat.user._id
            : this.chat.guide._id;
        this.$emit("sendMsg", JSON.parse(JSON.stringify(this.msg)));
        this.msg.txt = "";
      }
    },
    sortMsgs(){
        this.chat.msgs.forEach(msg => {
        if (msg.fromId !== this.loggedInUser._id) msg.in = true;
      });
    }
  },
  computed:{
    loggedInUser(){
      return this.$store.getters.loggedInUser
    },
  },
  created() {
    if (this.chat.msgs.length) {
      this.sortMsgs()
    }
    console.log(this.chat);
    
  },
  watch:{
    'chat.msgs'(){
      this.sortMsgs()
    }
  }
};
</script>
