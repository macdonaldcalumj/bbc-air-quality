<template>
  <section class="section">
    <div class="content">
      <p v-for="p in paragraphs" :key="p">
        {{ p }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    paragraphs: {
      default() {
        return []
      }
    },
  }
}
</script>
