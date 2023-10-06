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

    const sendDisabled = ref<boolean>(true);

    function fillKids() {
      kids.value = store.kids;
    }

    onMounted(() => {
      fillKids();
      setDisabledSaveButton();
    });

    watch(
      () => store.kids,
      () => {
        fillKids();
      },
      { deep: true },
    );

    function setDisabledSaveButton() {
      let stop = !store.owner.name || !store.owner.age;
      if (!stop) {
        for (let kid of store.kids) {
          stop = !kid.name || !kid.age || kid.age <= 0;
          if (stop) break;
        }
      }
      sendDisabled.value = stop;
    }

    watch(
      () => store,
      () => {
        setDisabledSaveButton();
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
      sendDisabled,
    };
  },
});
</script>

<template src="./forms.view.html"></template>

<style scoped></style>