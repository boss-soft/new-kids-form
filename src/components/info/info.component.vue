<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    currentRecord: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<template src="./info.component.html"></template>