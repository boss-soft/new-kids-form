<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="logo">
      <img
        alt="alef logo"
        height="29"
        src="@/assets/alefLogo.png"
        width="93"
      />
    </div>
    <div class="nav">
      <router-link to="/">Форма</router-link>
      <router-link to="/preview">Превью</router-link>
    </div>
  </header>

  <RouterView />
</template>