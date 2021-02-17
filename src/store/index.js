import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: localStorage.getItem("city")
      ? localStorage.getItem("city")
      : "Bandung",
    weather: {},
    location: {},
    day: []
  },
  getters: {
    getCity: state => {
      return state.city;
    },
    getWeather: state => {
      return state.weather;
    },
    getLocation: state => {
      return state.location;
    },
    getDay: state => {
      return state.day;
    }
  },
  mutations: {
    selectCity(state, data) {
      state.city = data;
      localStorage.setItem("city", data);
    },
    pushData(state, data) {
      state.weather = data.weather;
      state.location = data.location;
      state.day = data.day;
    }
  },
  actions: {
    weatherLoad({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(process.env.VUE_APP_WEATHER_API + "forecast.json", {
            params: {
              key: process.env.VUE_APP_WEATHER_KEY,
              q: state.city,
              days: 7
            }
          })
          .then(res => {
            let location = res.data.location;
            let weather = res.data.current;
            let day = res.data.forecast.forecastday;
            commit("selectCity", state.city);
            commit("pushData", { location, weather, day });
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  modules: {}
});
