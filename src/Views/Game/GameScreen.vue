<template>
  <div class="p-4">
    <div class="w-full text-center">
      <strong class="text-3xl mb-2 block">{{ timeLeft }}</strong>
      <p
        v-if="binaryTarget"
        class="text-xl">
        Target: <span class=" text-yellow-500 font-bold">{{ binaryStringToNumber(binaryTarget) }}</span>
      </p>
    </div>

    <SwitchGroup class="my-8"/>

    <div class="text-center flex justify-center flex-col">
      <strong>Score: {{ score }}</strong>
      <h3 v-if="showUserScore" class="mb-2">Your input: {{ binaryStringToNumber(userBinary) }}</h3>
      <Button
        v-if="allowSkips"
        @click="generateBinaryTarget"
        class="bg-yellow-500">
        Skip
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import {binaryStringToNumber} from '@/utils/binaryStringToNumber/binaryStringToNumber';
import {watch} from 'vue';
import {storeToRefs} from 'pinia';
import SwitchGroup from '@/Components/SwitchGroup/SwitchGroup.vue';
import Button from '@/Components/Button/Button.vue';
import { useSettingsStore } from '@/store/settings';
import useScore from '@/composables/useScore/useScore';
import useTimer from '@/composables/useTimer/useTimer';
import useBinary from '@/composables/useBinary/useBinary';

const settingsStore = useSettingsStore();

const {
  showUserScore,
  allowSkips,
} = storeToRefs(settingsStore);

const {score, incrementScore} = useScore();
const {timeLeft} = useTimer();
const {binaryTarget, userBinary, generateUserBinary, generateBinaryTarget} = useBinary();

onMounted(() => {
  generateBinaryTarget();
  generateUserBinary();
});

watch(userBinary, () => {
  if (userBinary.value === binaryTarget.value) {
    incrementScore();
    generateBinaryTarget();
  }
});
</script>
