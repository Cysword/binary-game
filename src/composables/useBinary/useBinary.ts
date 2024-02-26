import { useSettingsStore } from "@/store/settings";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import {generateBinaryNumber} from '@/utils/generateBinaryNumber/generateBinaryNumber';
import {get} from '@vueuse/core';

const binaryTarget = ref('');
const userBinary = ref('');

export default function useBinary() {
  const settingsStore = useSettingsStore();
  const {amountOfBits} = storeToRefs(settingsStore);

  const generateUserBinary = () => {
    userBinary.value = '0'.repeat(get(amountOfBits));
  }

  const generateBinaryTarget = () => {
    const newTarget = generateBinaryNumber(get(amountOfBits));

    if (newTarget === binaryTarget.value) {
      generateBinaryTarget();
    } else {
      binaryTarget.value = newTarget;
    }

    generateUserBinary();
  };

  const splitUserBinary = computed(() => {
    return userBinary.value.split('')
  });

  const updateUserBinary = (checked: boolean, index: number) => {
    const newUserGuess = splitUserBinary.value;
    newUserGuess[index] = checked ? '1' : '0';
    userBinary.value = newUserGuess.join('');
  }

  return {
    binaryTarget,
    userBinary,
    splitUserBinary,
    generateBinaryTarget,
    generateUserBinary,
    updateUserBinary,
  }
}
