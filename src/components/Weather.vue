<template>
  <section>
    <div class="row">
      <div class="card rounded-3 shadow border-0">
        <div class="p-2 d-flex">
          <span class="h1 mb-0">{{ weather.temp_c }}°</span>
          <div class="d-flex flex-column ms-2 me-auto">
            <span class="text-muted">{{ formatDate() }}</span>
            <span class="text-muted">{{ location.name }}</span>
          </div>
          <img
            :src="weather.condition.icon"
            :alt="weather.condition.text"
            width="50"
            height="50"
          />
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="card rounded-3 shadow border-0 py-2 px-0">
        <div
          class="align-items-center align-self-center text-center d-flex flex-row"
        >
          <div class="d-flex flex-column px-3">
            <span class="text-muted mb-1">Angin</span>
            <span>{{ weather.wind_kph }} km/h</span>
          </div>
          <div class="d-flex flex-column px-3">
            <span class="text-muted mb-1">Kelembapan</span>
            <span>{{ weather.humidity }} %</span>
          </div>
          <div class="d-flex flex-column px-3">
            <span class="text-muted mb-1">Pandangan</span>
            <span>{{ weather.vis_km }} Km</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("weatherLoad");
  },
  computed: {
    location() {
      return this.$store.getters.getLocation;
    },
    weather() {
      return this.$store.getters.getWeather;
    }
  },
  methods: {
    formatDate() {
      const options = { weekday: "long", day: "numeric", month: "long" };
      return new Date().toLocaleDateString("id", options);
    }
  }
};
</script>
