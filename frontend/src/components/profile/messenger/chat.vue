<template>
  <section class="chat" v-if="chat">
    <div class="chat-header">
      <img :src="chat.user.imgUrl" />
      <h1>{{chat.user.name}}</h1>
    </div>
    <div class="chat-txt">
      <div  class="msg" :class="checkMsg(msg)"  v-for="(msg,idx) in chat.msgs" :key="idx">
        <img :src="checkUrl(msg)"/>
        <p >{{msg.txt}}</p>
      </div>
    </div>
    <div class="input-msg">
      <input type="text" placeholder="Type a message...">
      <button>Send</button>
    </div>
  </section>
</template>

<script>
import socketService from "@/services/socket.service";
export default {
  props: {
    user: Object,
    chat: Object
  },
  data() {
    return {
      isIncoming: false
    };
  },
  methods: {
    checkMsg(msg) {
      if (msg.in) return 'incoming-msg';
      else return 'sent-msg';
    },
    checkUrl(msg){
      if(msg.in) return this.chat.user.imgUrl;
      else return this.chat.guide.imgUrl;
    }
  },
  mounted() {
    setTimeout(() => {
      this.chat.msgs.forEach(msg => {
        if (msg.fromId !== this.user._id) msg.in = true;
      });
    }, 2000);
  }
};
</script>
