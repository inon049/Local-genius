<template>
  <section id="recent" class="chat" v-if="chat!==null">
    <div class="chat-header">
      <img :src="img" />
      <h1>{{chat.user.name}}</h1>
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
        isRead: false,
        userType:''
      }
    };
  },
  methods: {
    checkMsg(msg) {
      if (msg.in) return "incoming-msg";
      else return "sent-msg";
    },
    checkUrl(msg) {
      // console.log(msg ,'msg');
      // console.log(this.user._id, "loggedIn");
      // console.log(this.chat.user._id, 'chat.user');
      if (msg.fromId === this.user._id) return this.chat.guide.imgUrl;
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
    sortMsgs() {
      this.chat.msgs.forEach(msg => {
        if (msg.fromId !== this.user._id) msg.in = true;
      });
    },
   
  },
  computed: {
    img() {
      // console.log(this.chat,'chat');
      // console.log(this.user._id, 'loogedin.id');
      if (this.user._id === this.chat.user.id) return this.chat.guide.imgUrl;
      else if (this.user._id === this.chat.guide.id)
        return this.chat.user.imgUrl;
    }
  },
  created() {
    if (this.chat.msgs.length) {
      this.sortMsgs();
    }
    console.log(this.user,'loggdinUsa')
    this.userType = (this.user._id===chat.user._id) ? 'user' :'guide'
    console.log(this.userType,'<userType');
  },
  watch: {
    "chat.msgs"() {
      this.sortMsgs();
    }
  },
  updated(){            
  var elem = this.$el
  elem.scrollTop = elem.scrollHeight;
},
};
</script>

