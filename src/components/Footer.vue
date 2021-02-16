<template>
  <footer class="mt-5 mb-4">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          exact-active-class="active"
          >Beranda</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Setting' }"
          exact-active-class="active"
          >Pengaturan</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'About' }"
          exact-active-class="active"
          >Tentang</router-link
        >
      </li>
    </ul>
  </footer>
</template>

<style scoped>
ul {
  padding-left: 0;
}
li {
  list-style: none;
}
ul > li {
  margin-right: 15px;
}
ul > li:last-child {
  margin-right: 0;
}
</style>
