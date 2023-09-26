<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
import { useFormStore } from '@/stores/form.store';
import { onMounted } from 'vue';

const store = useFormStore();

onMounted(() => {
  const localStorage = window.localStorage;
  const fromStorage = localStorage.getItem('storeKids');
  if (fromStorage && fromStorage != '{}') {
    store.setAllStore(fromStorage);
  }
});
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
      <router-link
        active-class="font-bold"
        to="/"
        >Форма
      </router-link>
      <router-link
        active-class="font-bold"
        to="/preview"
        >Превью
      </router-link>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>

  <footer>all rights reserved</footer>
</template>