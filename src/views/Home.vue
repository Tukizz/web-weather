<template>
  <main>
    <div class="container my-5">
      <div class="row">
        <div class="card rounded-3 shadow border-0">
          <div class="p-2 d-flex">
            <span class="h1 mb-0">27°</span>
            <div class="d-flex flex-column ms-2 me-auto">
              <span class="text-muted">{{ formatDate() }}</span>
              <span class="text-muted">Antapani, Bandung</span>
            </div>
            <mdicon
              name="weatherSunny"
              size="50"
              style="background-color:blue;"
            />
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="card rounded-3 shadow border-0">
          <div class="card-body">
            <div class="row align-items-center align-self-center text-center">
              <div class="col-4 d-flex flex-column">
                <span class="text-muted mb-1">Wind</span>
                <span>33 m/h</span>
              </div>
              <div class="col-4 d-flex flex-column">
                <span class="text-muted mb-1">Humidity</span>
                <span>23 Km</span>
              </div>
              <div class="col-4 d-flex flex-column">
                <span class="text-muted mb-1">Visibility</span>
                <span>54 %</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    formatDate() {
      const options = { weekday: "long", day: "numeric", month: "long" };
      return new Date().toLocaleDateString("id", options);
    }
  }
};
</script>
