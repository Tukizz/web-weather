<template>
  <main>
    <div class="container px-0 my-4">
      <h1>Pengaturan</h1>

      <div
        v-if="alert"
        class="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        Cuaca Berhasil di ganti ke {{ selectCity }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <div class="container">
        <div class="mb-3">
          <label for="listCity" class="form-label"
            >Pilih Kota untuk cuaca</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            id="listCity"
            v-model="selectCity"
          >
            <option v-for="data in kota" :key="data.id" :value="data.name">{{
              data.name
            }}</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="chooseCity">Simpan</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      kota: [
        {
          id: 1,
          name: "Makassar"
        },
        {
          id: 2,
          name: "Semarang"
        },
        {
          id: 3,
          name: "Palembang"
        },
        {
          id: 4,
          name: "Depok"
        },
        {
          id: 5,
          name: "Tanggerang"
        },
        {
          id: 6,
          name: "Medan"
        },
        {
          id: 7,
          name: "Bandung"
        },
        {
          id: 8,
          name: "Surabaya"
        },
        {
          id: 9,
          name: "Bekasi"
        },
        {
          id: 10,
          name: "Jakarta"
        }
      ],
      selectCity: null,
      alert: false
    };
  },
  methods: {
    chooseCity() {
      this.$store.commit("selectCity", this.selectCity);
      this.$store.dispatch("weatherLoad").then(() => (this.alert = true));
    }
  },
  created() {
    this.selectCity = this.$store.getters.getCity;
  }
};
</script>
