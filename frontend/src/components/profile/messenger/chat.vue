<template>
  <section class="chat">
      <h2>Chat</h2>
  </section>
</template>

<script>
import socketService from '@/services/socket.service'
export default {
methods:{

},
created(){
  this.$store.dispatch('sendMsg','bliblue')
} 
}
</script>
