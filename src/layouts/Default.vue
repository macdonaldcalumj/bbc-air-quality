<template>
  <div>
    <section class="section">
      <div class="container">
        <slot/>
      </div>
    </section>
    <footer class="footer">
      <LocaleChanger/>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import LocaleChanger from '@/components/LocaleChanger'

export default ({
  components: {
    LocaleChanger
  },
})
</script>

