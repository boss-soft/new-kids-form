import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IKids, IPersonal, TChangingRecord } from '@/types/form.interfaces';

export const useFormStore = defineStore('formStore', () => {
  const owner = ref<IPersonal>({});
  const kids = ref<IPersonal[]>([]);

  function changeRecord(newRecord: IPersonal, changingRecord: TChangingRecord, index: number = -1) {
    let currentRecord: IPersonal;
    if (changingRecord === 'owner') {
      currentRecord = owner.value;
    } else {
      if (index > -1) currentRecord = kids.value[index];
    }
    if (newRecord.name) currentRecord.name = newRecord.name;
    if (newRecord.age) currentRecord.age = newRecord.age;
  }

  function addKid() {
    kids.value.pop();
  }

  function deleteKid(index: number) {
    kids.value.splice(index, 1);
  }

  return {
    owner,
    kids,
    changeRecord,
    addKid,
    deleteKid,
  };
});
