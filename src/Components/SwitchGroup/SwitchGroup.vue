<template>
  <div
    class="grid grid-container w-full"
    :class="{
      'rtl': reversedOrder,
    }">
    <Switch
      v-if="amountOfBits"
      v-for="(_, index) in amountOfBits"
      class="w-full"
      :key="index"
      :checked="splitUserBinary[index]"
      :model-value="splitUserBinary[index]"
      @update:modelValue="($event) => updateUserBinary($event, index)"
    >
      <template v-if="showSwitchValues">
        {{ Math.pow(2, index) }}
      </template>
    </Switch>
  </div>
</template>

<script setup lang="ts">
import {storeToRefs} from 'pinia';
import Switch from '@/Components/Switch/Switch.vue';
import { useSettingsStore } from '@/store/settings';
import useBinary from '@/composables/useBinary/useBinary';
import { computed } from 'vue';

const settingsStore = useSettingsStore();

const {
  showSwitchValues,
  amountOfBits,
  reversedOrder,
} = storeToRefs(settingsStore);

const {splitUserBinary, updateUserBinary} = useBinary();

const gridRows = computed(() => {
  return Math.min(amountOfBits.value, 4);
});

</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(v-bind(gridRows), 1fr);
  gap: 1rem;
  grid-auto-rows: auto;
}

.rtl {
  grid-auto-flow: dense;
  direction: rtl;
}
</style>

