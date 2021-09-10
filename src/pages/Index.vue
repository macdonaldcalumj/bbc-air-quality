<template>
  <Layout>
    <img class="hero-image" :src="$page.allAirQuality.edges[0].node.heroImage">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          {{ $page.allAirQuality.edges[0].node.heroTitle }}
        </p>
        <p class="subtitle">
          {{ $page.allAirQuality.edges[0].node.byline }}
        </p>
      </div>
    </section>
    <TextBlock v-bind:paragraphs="$page.allAirQuality.edges[0].node.textBlock1"/>
  </Layout>
</template>

<page-query>
query($locale:String) {
  allAirQuality(filter: { lang: { eq: $locale }}) {
    edges {
      node {
        id,
        heroImage,
        heroTitle,
        byline,
        date,
        category,
        categoryUrl,
        textBlock1,
        method,
        tabsTitle,
        tabsCities {
          name,
          aqi,
          cig
        },
        textBlock2
      }
    }
  }
}
</page-query>

<script>
import TextBlock from '@/components/TextBlock'
export default {
  components: {
    TextBlock
  },
  metaInfo()  {
    return {
      title: this.$page.allAirQuality.edges[0].node.heroTitle
    }
  },
}
</script>

<style scoped>
.hero-image {
  width: 100%;
}
</style>
