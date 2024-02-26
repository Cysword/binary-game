<template>
  <div class="w-full flex flex-col p-4 max-w-xl">
    <h1 class="mb-8 text-3xl">Binary game</h1>

    <p class="mb-8 text-xl">
      Try to guess the binary number with the switches.
      You can also use the keyboard to change the switches.
    </p>

    <Button @click="startTimer" class="self-center text-xl">
      Start
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/Components/Button/Button.vue';
import useTimer from '@/composables/useTimer/useTimer';

const {startTimer} = useTimer();
</script>
