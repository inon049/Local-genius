<template>
  <section id="recent" class="chat" v-if="chat!==null">
    <div class="chat-header">
      <img :src="img" />
      <h1>{{name}}</h1>
    </div>
    <div id="chat" class="chat-txt">
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
      name: ""
    };
  },
  methods: {
    checkMsg(msg) {
      if (msg.in) return "incoming-msg";
      else return "sent-msg";
    },
    checkUrl(msg) {
      if (msg.fromId === this.chat.user._id) return this.chat.user.imgUrl;
      else return this.chat.guide.imgUrl;
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
    sortMsgs() {
      this.chat.msgs.forEach(msg => {
        if (msg.fromId !== this.user._id) msg.in = true;
      });
    },
    checkName() {
      if (this.user._id === this.chat.user._id)
        this.name = this.chat.guide.name;
      else if (this.user._id === this.chat.guide._id)
        this.name = this.chat.user.name;
    }
  },
  computed: {
    img() {
      if (this.user._id === this.chat.user._id) return this.chat.guide.imgUrl;
      else if (this.user._id === this.chat.guide._id)
        return this.chat.user.imgUrl;
    }
  },
  mounted() {
    if (this.chat.msgs.length) {
      this.sortMsgs();
    }
    this.checkName();
  },
  watch: {
    "chat.msgs"() {
      this.sortMsgs();
      this.checkName();
    }
  },
  updated() {
    var elem = this.$el;
    elem.scrollTop = elem.scrollHeight;
  }
};
</script>

