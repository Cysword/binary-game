import { useScoreStore } from "@/store/score";
import { storeToRefs } from "pinia";
import { readonly} from "vue"

export default function useScore() {
  const scoreStore = useScoreStore();
  const {score, highScore} = storeToRefs(scoreStore);

  const incrementScore = () => {
    scoreStore.setScore(score.value + 1);
  };

  return {
    score: readonly(score),
    highScore: readonly(highScore),
    incrementScore,
  }
}
