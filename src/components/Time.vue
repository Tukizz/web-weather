<template>
  <span class="display-3">{{ time }}</span>
</template>
<script>
export default {
  data() {
    return {
      time: ""
    };
  },
  created() {
    setInterval(this.updateTime, 1000);
    this.updateTime();
  },
  methods: {
    updateTime() {
      var cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>
