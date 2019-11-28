<template>
  <section class="guide-preview-container">
      <li>
          {{guide.name}}
      </li>
  </section>
</template>

<script>
export default {
props: {
    guide: Object
  }
}
</script>

<style>

</style>