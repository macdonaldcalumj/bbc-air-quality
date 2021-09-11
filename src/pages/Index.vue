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
    {{ $t("message.category") }}: <a :href="$page.allAirQuality.edges[0].node.categoryUrl" target="blank">{{ $page.allAirQuality.edges[0].node.category }}</a>
    <TextBlock v-bind:paragraphs="$page.allAirQuality.edges[0].node.textBlock1"/>
    <CityInfo
      v-bind:title="$page.allAirQuality.edges[0].node.tabsTitle"
      v-bind:cities="$page.allAirQuality.edges[0].node.tabsCities"
    />
    <TextBlock v-bind:paragraphs="$page.allAirQuality.edges[0].node.textBlock2"/>
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
import CityInfo from '@/components/CityInfo'
import TextBlock from '@/components/TextBlock'

export default {
  components: {
    CityInfo,
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
