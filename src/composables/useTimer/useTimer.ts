import { useSettingsStore } from "@/store/settings";
import { storeToRefs } from "pinia";
import { readonly, ref } from "vue";
import dayjs from "dayjs";
import {get} from '@vueuse/core';

const timer = ref();
const gameEnded = ref(false);
const countdownTimer = ref();
const timeLeft = ref('00:00');
const end = ref();
const timerRunning = ref(false);
const TickSpeed = 1000;

export default function useTimer() {
  const settingsStore = useSettingsStore();
  const {gameTime} = storeToRefs(settingsStore);

  const leftPad = (num: number) => num.toString().padStart(2, '0');

  const getDifference = () => {
    if (!get(end)) {
      return 0;
    }

    return get(end).diff(dayjs(), 'seconds');
  };

  const updateTimer = () => {
    const diffInSeconds = getDifference();
    const minutes = Math.floor(diffInSeconds / 60);
    const seconds = diffInSeconds % 60;
    timeLeft.value = `${minutes}:${leftPad(seconds)}`;
  };

  const runTimer = () => {
    gameEnded.value = false;
    updateTimer();

    timer.value = setInterval(() => {
      updateTimer();
    }, TickSpeed);

    timer.value = setInterval(() => {
      stopTimer();
    }, get(gameTime));
  }

  const startTimer = () => {
    timerRunning.value = true;
    end.value = dayjs().add(get(gameTime), 'ms');
    runTimer();
  }

  const stopTimer = () => {
    gameEnded.value = true;
    timerRunning.value = false;
    end.value = null;
    clearInterval(timer.value);
    clearInterval(countdownTimer.value);
  }

  return {
    timerRunning: readonly(timerRunning),
    end: readonly(end),
    timeLeft: readonly(timeLeft),
    gameEnded: readonly(gameEnded),
    startTimer,
    stopTimer,
  }
}
