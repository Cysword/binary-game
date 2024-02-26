<template>
  <div class="flex flex-col gap-4">
    <h1>Settings</h1>

    <div class="flex gap-2">
      <p>With how many bits do you want to play?</p>
      <input type="number" min="1" step="1" v-model="amountOfBitsValue" />
    </div>

    <div class="flex gap-2">
      <p>Show the amount of your own input?</p>
      <input type="checkbox" v-model="showUserScoreValue" />
    </div>

    <div class="flex gap-2">
      <p>Show the value of every input?</p>
      <input type="checkbox" v-model="showSwitchValuesValue" />
    </div>

    <div class="flex gap-2">
      <p>Allow skips of the current target?</p>
      <input type="checkbox" v-model="allowSkipsValue" />
    </div>

    <div class="flex gap-2">
      <p>Do you want a true binary display?</p>
      <input type="checkbox" v-model="reversedOrderValue" />
    </div>

    <div class="flex gap-2">
      <p>Key bindings?</p>
      <input type="text" v-model="keybindingsValue" />
    </div>

    <Button @click="save">Save</Button>
  </div>
</template>

<script setup lang="ts">
import { defineModel, onMounted } from 'vue';
import { useSettingsStore } from '@/store/settings';
import Button from '@/Components/Button/Button.vue';
import { useRouter } from 'vue-router';

const {
  showUserScore,
  showSwitchValues,
  trackMoves,
  limitMoves,
  allowSkips,
  gameTime,
  amountOfBits,
  updateSettings,
  reversedOrder,
  keybindings,
} = useSettingsStore();

const router = useRouter();

const amountOfBitsValue = defineModel('amountOfBits', {
  type: Number,
});
const showSwitchValuesValue = defineModel('showSwitchValues', {
  type: Boolean,
});
const showUserScoreValue = defineModel('showUserScore', {
  type: Boolean,
});
const allowSkipsValue = defineModel('allowSkips', {
  type: Boolean,
});
const reversedOrderValue = defineModel('reversedOrder', {
  type: Boolean,
});
const keybindingsValue = defineModel('keybindings', {
  type: String,
});

onMounted(() => {
  amountOfBitsValue.value = amountOfBits;
  showSwitchValuesValue.value = showSwitchValues;
  showUserScoreValue.value = showUserScore;
  allowSkipsValue.value = allowSkips;
  reversedOrderValue.value = reversedOrder;
  keybindingsValue.value = keybindings.join(',');
});

const save = () => {
  updateSettings({
    amountOfBits: amountOfBitsValue.value,
    showSwitchValues: showSwitchValuesValue.value,
    showUserScore: showUserScoreValue.value,
    trackMoves,
    limitMoves,
    allowSkips: allowSkipsValue.value,
    gameTime,
    reversedOrder: reversedOrderValue.value,
    keybindings: keybindingsValue.value?.split(','),
  });

  router.push({ name: 'game' });
};
</script>

