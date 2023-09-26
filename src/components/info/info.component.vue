<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from 'vue';
import { useFormStore } from '@/stores/form.store';
import type { IPersonal, TChangingRecord } from '@/types/form.interfaces';

export default defineComponent({
  props: {
    currentRecord: {
      type: String as PropType<TChangingRecord>,
      required: true,
    },
    kidId: {
      type: Number,
      default: -1,
      required: false,
    },
  },
  setup(props) {
    const store = useFormStore();

    const record = ref<IPersonal>({});

    if (props.currentRecord === 'owner') {
      record.value = store.owner;
    } else {
      let tempRecord = store.kids.find((p) => p.id === props.kidId);
      if (tempRecord) record.value = tempRecord;
      else record.value = store.kids[0];
    }
    const modelName = ref('');
    const modelAge = ref(0);

    if (record.value) {
      modelName.value = record.value.name as string;
      modelAge.value = record.value.age as number;
    }

    function saveToStore() {
      store.changeRecord(
        {
          name: modelName.value,
          age: modelAge.value,
        },
        props.currentRecord,
        props.kidId,
      );
    }

    function deleteFromStore() {
      store.deleteKid(props.kidId);
    }

    return {
      currentRecord: props.currentRecord,
      modelName,
      modelAge,
      saveToStore,
      deleteFromStore,
    };
  },
});
</script>

<template src="./info.component.html"></template>