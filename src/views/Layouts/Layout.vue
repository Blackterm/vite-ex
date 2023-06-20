<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link class="nav-link" aria-current="page" to="/home"
        >Home</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" aria-current="page" to="/users"
        >Kullanıcı Listesi</router-link
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AutLayout",
});
</script>
