<template>
  <div>
    <p>{{ $t("message.changeLocale") }}</p>
    <b-button @click="changeLocale('en-gb')" :type="englishType">English</b-button>
    <b-button @click="changeLocale('hi-in')" :type="hindiType">हिंदी</b-button>
  </div>
</template>

<script>
export default {
  computed: {
    englishType: function() {
      return(this.$context.locale === 'en-gb' ? 'is-primary': '')
    },
    hindiType: function() {
      return(this.$context.locale === 'hi-in' ? 'is-primary': '')
    },
  },
  methods: {
    changeLocale(locale) {
      // Prevent reloading existing page
      if (this.$context.locale === locale) {
        return
      }

      this.$router.push({
        path: this.$tp(this.$route.path, locale, true)
      })
    }
  }
}
</script>
