<template>
  <section class="messenger-container">
    <recent-chats  :chats="recentChats" @selectChat="selectChat"></recent-chats>
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
      recentChats: [
        {
          _id: "5de3ed727fe0b526944c41ed",
          updatedAt: "1575468547351",
          msgs: [
              {
              fromId: "5de3ed727fe0b526944c41e8",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
              {
              fromId: "5de3ed727fe0b526944c41e8",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
              {
              fromId: "5de3ed727fe0b526944c41e8",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
              {
              fromId: "5de3ed727fe0b526944c41e8",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },

            {
              fromId: "5de3ed727fe0b526944c41e5",
              toId: "5de3ed727fe0b526944c41e8",
              txt: "ty i enjoied too",
              sentAt: "1575294204999",
              isRead: false
            }
          ],
          fromUser: {
            _id: "5de3ed727fe0b526944c41e5",
            name: "Shon Scott",
            imgUrl:
              "https://dlq9ebkqqrcon.cloudfront.net/d4a2324f-6394-44dc-90da-791a540113ab/45d43acf36092bf8.jpg"
          },
          toUser: {
          }
        },
           {
          _id: "5de3ed727fe0b526944c41ed",
          updatedAt: "1575468547351",
          msgs: [
            {
              fromId: "5de3ed727fe0b526944c41ed",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
            {
              fromId: "5de3ed727fe0b526944c41e5",
              toId: "5de3ed727fe0b526944c41ed",
              txt: "ty i enjoied too",
              sentAt: "1575294204999",
              isRead: false
            }
          ],
          fromUser: {
            _id: "5de3ed727fe0b526944c41ed",
            name: "Shon Scott",
            imgUrl:
              "https://dlq9ebkqqrcon.cloudfront.net/b00fbcc3-6c22-4972-99d1-c6c14e67ee88/ba16ee9797b4bdf3.jpg"
          },
          toUser: {
          }
        },
           {
          _id: "5de3ed727fe0b526944c41ed",
          updatedAt: "1575468547351",
          msgs: [
            {
              fromId: "5de3ed727fe0b526944c41ed",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
            {
              fromId: "5de3ed727fe0b526944c41e5",
              toId: "5de3ed727fe0b526944c41ed",
              txt: "ty i enjoied too",
              sentAt: "1575294204999",
              isRead: false
            }
          ],
          fromUser: {
            _id: "5de3ed727fe0b526944c41ed",
            name: "Shon Scott",
            imgUrl:
              "https://dlq9ebkqqrcon.cloudfront.net/8a432304-33ac-4233-a558-7fb6d0469034/871ae694afca8308.jpg"
          },
          toUser: {
          }
        },
           {
          _id: "5de3ed727fe0b526944c41ed",
          updatedAt: "1575468547351",
          msgs: [
            {
              fromId: "5de3ed727fe0b526944c41ed",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
            {
              fromId: "5de3ed727fe0b526944c41e5",
              toId: "5de3ed727fe0b526944c41ed",
              txt: "ty i enjoied too",
              sentAt: "1575294204999",
              isRead: false
            }
          ],
          fromUser: {
            _id: "5de3ed727fe0b526944c41ed",
            name: "Shon Scott",
            imgUrl:
              "https://dlq9ebkqqrcon.cloudfront.net/8b718b01-d694-40e3-b072-923820f8c214/93a8e9abc237d897.jpg"
          },
          toUser: {
          }
        },
           {
          _id: "5de3ed727fe0b526944c41ed",
          updatedAt: "1575468547351",
          msgs: [
            {
              fromId: "5de3ed727fe0b526944c41ed",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
            {
              fromId: "5de3ed727fe0b526944c41e5",
              toId: "5de3ed727fe0b526944c41ed",
              txt: "ty i enjoied too",
              sentAt: "1575294204999",
              isRead: false
            }
          ],
          fromUser: {
            _id: "5de3ed727fe0b526944c41ed",
            name: "Shon Scott",
            imgUrl:
              "https://dlq9ebkqqrcon.cloudfront.net/d4a2324f-6394-44dc-90da-791a540113ab/45d43acf36092bf8.jpg"
          },
          toUser: {
          }
        },
           {
          _id: "5de3ed727fe0b526944c41ed",
          updatedAt: "1575468547351",
          msgs: [
            {
              fromId: "5de3ed727fe0b526944c41ed",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
            {
              fromId: "5de3ed727fe0b526944c41e5",
              toId: "5de3ed727fe0b526944c41ed",
              txt: "ty i enjoied too",
              sentAt: "1575294204999",
              isRead: false
            }
          ],
          fromUser: {
            _id: "5de3ed727fe0b526944c41ed",
            name: "Shon Scott",
            imgUrl:
              "https://dlq9ebkqqrcon.cloudfront.net/eb98a2cc-ff91-4320-94fd-f67d00d88dec/c5eca7476ef87fc8.jpg"
          },
          toUser: {
          }
        },
           {
          _id: "5de3ed727fe0b526944c41ed",
          updatedAt: "1575468547351",
          msgs: [
            {
              fromId: "5de3ed727fe0b526944c41ed",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
            {
              fromId: "5de3ed727fe0b526944c41e5",
              toId: "5de3ed727fe0b526944c41ed",
              txt: "ty i enjoied too",
              sentAt: "1575294204999",
              isRead: false
            }
          ],
          fromUser: {
            _id: "5de3ed727fe0b526944c41ed",
            name: "Shon Scott",
            imgUrl:
              "https://dlq9ebkqqrcon.cloudfront.net/868c5b72-2783-46a9-b1f5-9341b2bddc81/70fdeb7cc6888842.jpg"
          },
          toUser: {
          }
        },
           {
          _id: "5de3ed727fe0b526944c41ed",
          updatedAt: "1575468547351",
          msgs: [
            {
              fromId: "5de3ed727fe0b526944c41ed",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
            {
              fromId: "5de3ed727fe0b526944c41e5",
              toId: "5de3ed727fe0b526944c41ed",
              txt: "ty i enjoied too",
              sentAt: "1575294204999",
              isRead: false
            }
          ],
          fromUser: {
            _id: "5de3ed727fe0b526944c41ed",
            name: "Shon Scott",
            imgUrl:
              "https://dlq9ebkqqrcon.cloudfront.net/eb98a2cc-ff91-4320-94fd-f67d00d88dec/c5eca7476ef87fc8.jpg"
          },
          toUser: {
          }
        },
           {
          _id: "5de3ed727fe0b526944c41ed",
          updatedAt: "1575468547351",
          msgs: [
            {
              fromId: "5de3ed727fe0b526944c41ed",
              toId: "5de3ed727fe0b526944c41e5",
              txt: "i had the best time of my life ty",
              sentAt: "1575294204195",
              isRead: true
            },
            {
              fromId: "5de3ed727fe0b526944c41e5",
              toId: "5de3ed727fe0b526944c41ed",
              txt: "ty i enjoied too",
              sentAt: "1575294204999",
              isRead: false
            }
          ],
          fromUser: {
            _id: "5de3ed727fe0b526944c41ed",
            name: "Shon Scott",
            imgUrl:
              "https://dlq9ebkqqrcon.cloudfront.net/868c5b72-2783-46a9-b1f5-9341b2bddc81/70fdeb7cc6888842.jpg"
          },
          toUser: {
          }
        },
      ],
      selectedChat:null
    };
  },
  methods: {
    selectChat(chat) {
      this.selectedChat = chat;
    }
  },
  created() {
    this.selectedChat =  this.recentChats[0]
    this.user = this.$store.getters.loggedInUser;
    this.recentChats[0].toUser.name = this.user.name
    this.recentChats[0].toUser.imgUrl = this.user.profileImgUrl
  }
};
</script>