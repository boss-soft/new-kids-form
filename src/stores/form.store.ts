import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IPersonal, TChangingRecord } from '@/types/form.interfaces';

export const useFormStore = defineStore('formStore', () => {
  const owner = ref<IPersonal>({});
  const kids = ref<IPersonal[]>([]);
  let id: number = 0;

  function changeRecord(newRecord: IPersonal, changingRecord: TChangingRecord, id: number = -1) {
    let currentRecord: IPersonal;
    if (changingRecord === 'owner') {
      currentRecord = owner.value;
    } else {
      let tempRecord = kids.value.find((p) => p.id === id);
      if (tempRecord) currentRecord = tempRecord;
      else currentRecord = kids.value[0];
    }
    currentRecord.name = newRecord.name;
    currentRecord.age = newRecord.age;
  }

  function addKid() {
    kids.value.push({ id: id, name: '', age: 0 });
    id++;
  }

  function deleteKid(id: number) {
    kids.value = kids.value.filter((p) => p.id !== id);
  }

  function setAllStore(newStore: string) {
    const storeRecord = JSON.parse(newStore);
    owner.value = storeRecord.owner;
    kids.value = storeRecord.kids;
    if (kids.value.length <= 0) {
      id = 0;
    } else {
      id = (kids.value[kids.value.length - 1].id as number) + 1;
    }
  }

  return {
    owner,
    kids,
    changeRecord,
    addKid,
    deleteKid,
    setAllStore,
  };
});
