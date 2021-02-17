<template>
  <div id="app">
    <keep-alive>
      <router-view :key="$route.fullpath" />
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer
  }
};
</script>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
}
body {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

#app {
  padding: 0px 20px;
  width: 100vw;
  max-width: 500px;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
