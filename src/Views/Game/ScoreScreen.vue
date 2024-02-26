<template>
  <div>
    <div class="mb-4">
        <h1>Game over</h1>
        <h2>Your score: {{ score }}</h2>
        <h2>Your high score: {{ highScore }}</h2>
      </div>

      <Button @click="startTimer">
        Restart
      </Button>
  </div>
</template>

<script setup lang="ts">
import useTimer from '@/composables/useTimer/useTimer';
import useScore from '@/composables/useScore/useScore';
import Button from '@/Components/Button/Button.vue';

const {score, highScore} = useScore();
const {startTimer} = useTimer();
</script>

<style scoped>

</style>
