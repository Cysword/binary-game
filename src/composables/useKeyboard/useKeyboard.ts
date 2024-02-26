import { useMagicKeys } from "@vueuse/core";
import { watch } from "vue";
import useBinary from '@/composables/useBinary/useBinary';
import { useSettingsStore } from "@/store/settings";
import { storeToRefs } from "pinia";
import useTimer from '@/composables/useTimer/useTimer';

export default function useKeyboard() {
  const {updateUserBinary, splitUserBinary} = useBinary();
  const settingsStore = useSettingsStore();
  const {keybindings} = storeToRefs(settingsStore);

  const keys = useMagicKeys();
  const getKeys = () => {
    return keybindings.value.map((key) => keys[key]);
  }

  getKeys().forEach((key, index) => {
    watch(key, (pressed) => {
      if (!pressed) return;

      const currentVal = splitUserBinary.value[index];
      const value = currentVal === '0' ? true : false;
      updateUserBinary(value, index);
    });
  });

  const {startTimer, timerRunning} = useTimer();

  watch([keys.space, keys.enter], () => {
    if (timerRunning.value) return;
    startTimer();
  });
}
