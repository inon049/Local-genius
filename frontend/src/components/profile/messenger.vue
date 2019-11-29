<template>
  <section class="messenger">
      <recent-chats></recent-chats>
      <chat></chat>
  </section>
</template>

<script>
import chat from './chat'
import recentChats from './recent-chats'
export default {
components:{
  recentChats,
  chat
}
};
</script>