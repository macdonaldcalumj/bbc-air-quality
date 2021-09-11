<template>
  <div class="columns">
    <div class="column">
      <section class="hero is-warning">
        <div class="hero-body">
          <p class="title">
            {{ title }}
          </p>
          <b-autocomplete
            placeholder="e.g. Delhi"
            v-model="cityName"
            :open-on-focus="true"
            :data="filteredDataObj"
            field="name"
            @select="option => (selectedCity = option)"
          >
          </b-autocomplete>
        </div>
      </section>
    </div>
    <div class="column">
      <section class="hero is-success">
        <div class="hero-body">
          <p class="subtitle">
            {{ $t("message.totalCigarettes") }}
          </p>
          <p v-if="selectedCity" class="title">
            {{ selectedCity.cig }}
          </p>
        </div>
      </section>
    </div>
    <div class="column">
      <section class="hero is-danger">
        <div class="hero-body">
          <p class="subtitle">
            AQI
          </p>
          <p v-if="selectedCity" class="title">
            {{ selectedCity.aqi }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: '',
      selectedCity: null,
    }
  },
  props: {
    title: {
      default: ''
    },
    cities: {
      default() {
        return []
      }
    }
  },
  computed: {
    filteredDataObj() {
      return this.cities.filter(option => {
        return (
          option.name
            .toString()
            .toLowerCase()
            .indexOf(this.cityName.toLowerCase()) >= 0
        )
      })
    }
  }
}
</script>

<style>

</style>
