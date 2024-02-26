import {readonly, ref} from 'vue';
import {defineStore} from 'pinia';
import {useLocalStorage} from '@vueuse/core';

export const useScoreStore = defineStore('score', () => {
  const score = ref(0);
  const highScore = useLocalStorage('highScore', 0);

  const setScore = (newScore: number) => {
    score.value = newScore;

    if (newScore > highScore.value) {
      highScore.value = newScore;
    }
  }

  return {
    score: readonly(score),
    highScore: readonly(highScore),
    setScore,
  };
});
