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
    <div class="row mt-4">
      <div class="card rounded-3 shadow border-0 ">
        <div class="card-body px-0">
          <h5 class="card-title">Cuaca Hari Ini di Setiap Jamnya</h5>
          <div v-swiper:mySwiperQ="options" class="swiper-container">
            <div class="swiper-wrapper">
              <ul class="list-group list-group-horizontal swiper-slide">
                <li
                  v-for="hour in day.hour"
                  :key="hour.length"
                  class="list-group-item border-0"
                >
                  <small class="d-flex justify-content-center">{{
                    formatTime(hour.time)
                  }}</small>
                  <img
                    class="d-flex justify-content-center"
                    :src="hour.condition.icon"
                    :alt="hour.condition.text"
                  />
                  <small class="d-flex justify-content-center"
                    >{{ hour.temp_c }}°</small
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.min.css";

export default {
  directives: {
    swiper: directive
  },
  data() {
    return {
      options: {
        slidesPerView: "auto",
        spaceBetween: 1,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  created() {
    this.$store.dispatch("weatherLoad");
  },
  computed: {
    location() {
      return this.$store.getters.getLocation;
    },
    weather() {
      return this.$store.getters.getWeather;
    },
    day() {
      return this.$store.getters.getDay[0];
    }
  },
  methods: {
    formatDate() {
      const options = { weekday: "long", day: "numeric", month: "long" };
      return new Date().toLocaleDateString("id", options);
    },
    formatTime(time) {
      const d = new Date(time);
      return new Intl.DateTimeFormat("id", {
        hour: "numeric",
        minute: "numeric"
      }).format(d);
    }
  }
};
</script>

<style scoped>
.swiper-slide {
  width: auto;
  height: auto;
}
</style>
