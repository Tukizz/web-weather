<template>
  <section>
    <div class="row mt-4">
      <div class="card rounded-3 shadow border-0 py-3">
        <h5 class="card-title">Cuaca Hari Berikutnya</h5>
        <div v-swiper:mySwiperA="options" class="swiper-container cuaca-day">
          <ul
            class="nav nav-pills mb-3 swiper-wrapper"
            id="pills-tab"
            role="tablist"
          >
            <li
              v-for="(data, index) in day.slice(1)"
              :key="data.length"
              class="nav-item swiper-slide"
              role="presentation"
            >
              <button
                class="nav-link"
                :class="{
                  active: tab == index,
                  '': tab != index
                }"
                :id="'pills-' + data.date + '-tab'"
                data-bs-toggle="pill"
                :data-bs-target="'#pills-' + data.date"
                type="button"
                role="tab"
                :aria-controls="'pills-' + data.date"
                aria-selected="true"
                @click="tab = index"
              >
                {{ formatDate(data.date) }}
              </button>
            </li>
          </ul>
        </div>
        <div
          v-for="(data, index) in day.slice(1)"
          :key="data.length"
          class="tab-content "
          id="pills-tabContent"
        >
          <div
            v-if="tab == index"
            class="tab-pane fade show"
            :class="{
              active: tab == index,
              '': tab != index
            }"
            :id="'pills-' + data.date"
            role="tabpanel"
            :aria-labelledby="'pills-' + data.date + '-tab'"
          >
            <span class="h3 ml-2 mb-5">{{ location.name }}</span>
            <div class="d-flex">
              <span class="mb-0">
                <img
                  :src="data.day.condition.icon"
                  :alt="data.day.condition.text"
                  width="50"
                  height="50"
                />
              </span>
              <div class="d-flex ms-2 me-auto">
                <span class="h1 mb-0">{{ data.day.avgtemp_c }}°</span>
              </div>
              <div clas="d-flex flex-column">
                <small class="d-flex text-muted"
                  >Angin : {{ data.day.maxwind_kph }} Km/h</small
                >
                <small class="d-flex text-muted"
                  >Kelembapan : {{ data.day.avghumidity }} %</small
                >
                <small class="d-flex text-muted"
                  >Pandangan : {{ data.day.avgvis_km }} Km</small
                >
              </div>
            </div>
            <div v-swiper:mySwiperB="options" class="swiper-container my-2">
              <div class="swiper-wrapper">
                <ul class="list-group list-group-horizontal swiper-slide">
                  <li
                    v-for="hour in data.hour"
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
      },
      tab: 0
    };
  },
  computed: {
    location() {
      return this.$store.getters.getLocation;
    },
    day() {
      return this.$store.getters.getDay;
    }
  },
  methods: {
    formatDate(date) {
      const d = new Date(date);
      return new Intl.DateTimeFormat("id", { weekday: "long" }).format(d);
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
.cuaca-day {
  margin-left: 0 !important;
}
</style>
