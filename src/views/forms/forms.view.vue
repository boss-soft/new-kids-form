<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import Info from '@/components/info/info.component.vue';
import { useFormStore } from '@/stores/form.store';
import type { IPersonal } from '@/types/form.interfaces';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { Info },
  setup() {
    const localStorage = window.localStorage;
    const router = useRouter();

    const store = useFormStore();
    const kids = ref<IPersonal[]>([]);

    function fillKids() {
      kids.value = store.kids;
    }

    onMounted(() => {
      fillKids();
    });

    watch(
      () => store.kids,
      () => {
        fillKids();
      },
      { deep: true },
    );

    function addKids() {
      store.addKid();
    }

    function saveToStorage() {
      const storage = {
        owner: store.owner,
        kids: store.kids,
      };
      localStorage.setItem('storeKids', JSON.stringify(storage));
      router.push('/preview');
    }

    return {
      kids,
      addKids,
      saveToStorage,
    };
  },
});
</script>

<template src="./forms.view.html"></template>

<style scoped></style>