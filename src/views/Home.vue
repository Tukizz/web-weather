<template>
  <main>
    <div class="container px-0 my-4">
      <div class="row mb-4">
        <div class="col text-center">
          <Time />
        </div>
      </div>

      <keep-alive>
        <Weather></Weather>
      </keep-alive>

      <keep-alive>
        <OneWeek></OneWeek>
      </keep-alive>
    </div>
  </main>
</template>

<script>
import Time from "@/components/Time";
import Weather from "@/components/Weather";
import OneWeek from "@/components/OneWeek";
export default {
  components: {
    Time,
    Weather,
    OneWeek
  }
};
</script>
