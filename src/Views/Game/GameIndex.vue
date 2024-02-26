<template>
  <StartScreen v-if="!timerRunning && !gameEnded" />
  <ScoreScreen v-else-if="gameEnded" />
  <GameScreen v-else />
</template>

<script setup lang="ts">
import useTimer from '@/composables/useTimer/useTimer';
import StartScreen from '@/Views/Game/StartScreen.vue';
import ScoreScreen from '@/Views/Game/ScoreScreen.vue';
import GameScreen from '@/Views/Game/GameScreen.vue';
import useKeyboard from '@/composables/useKeyboard/useKeyboard';

const {timerRunning, gameEnded} = useTimer();

useKeyboard();
</script>
