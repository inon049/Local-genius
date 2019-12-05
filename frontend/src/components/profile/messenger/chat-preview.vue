<template>
  <div class="chat-preview" v-if="chat">
    <img :src="chat.user.imgUrl" />
    <div class="chat-preview-content">
      <h4>{{chat.user.name}}</h4>
      <div class="chat-preview-txt">
          <p>{{chat.msgs[0].txt.substring(0,10)}}...</p>
          <p>{{ +chat.updatedAt | moment('calendar', "July 10 2011")}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chat: Object
  },
  created() {
  }
};
</script>
