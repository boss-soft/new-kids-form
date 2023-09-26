<script lang="ts">
import { defineComponent } from 'vue';
import { useFormStore } from '@/stores/form.store';
import Info from '@/components/info/info.component.vue';

export default defineComponent({
  components: { Info },
  setup() {
    const store = useFormStore();

    function ageToText(age: number) {
      let num = age % 100;
      if (num >= 5 && num <= 20) {
        return age + ' лет';
      }
      num = num % 10;
      if (num === 1) {
        return age + ' год';
      }
      if (num >= 2 && num <= 4) {
        return age + ' года';
      }
      return age + ' лет';
    }

    return {
      ageToText,
      store,
    };
  },
});
</script>

<template src="./preview.view.html"></template>