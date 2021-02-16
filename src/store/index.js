import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: "Bandung",
    weather: {},
    location: {}
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
    }
  },
  mutations: {
    selectCity(state, data) {
      state.city = data;
    },
    pushData(state, data) {
      state.weather = data.weather;
      state.location = data.location;
    }
  },
  actions: {
    weatherLoad({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(process.env.VUE_APP_WEATHER_API + "current.json", {
            params: {
              key: process.env.VUE_APP_WEATHER_KEY,
              q: state.city
            }
          })
          .then(res => {
            let location = res.data.location;
            let weather = res.data.current;

            commit("selectCity", state.city);
            commit("pushData", { location, weather });
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
