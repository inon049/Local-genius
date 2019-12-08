<template>
<section class="footer">
    <p>Local-Genius &copy; {{currYear}}  by Inon Ori Dror</p>
</section>
</template>

<script>
import { eventBus } from "../services/event.bus.service";

export default {
  data() {
    return {
    };
  },
  computed: {
    currYear(){
     return new Date().getFullYear()
    }
  },
  methods: {

  },
  created() {
  }
};
</script>
