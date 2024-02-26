<template>
  <div>
    <label
      class="p-4 flex rounded-full items-center justify-center leading-none text-xl"
      :class="{
        'bg-green-300': value,
        'bg-red-900': !value,

      }">
      <input
        v-model="value"
        type="checkbox"
        class="appearance-none" />

        <span
          class="font-bold"
          :class="{
            'text-green-800': value,
            'text-red-300': !value,
          }">
          <slot />
        </span>
    </label>
  </div>
</template>

<script setup lang="ts">
const value = defineModel('modelValue', {
  get: (value) => value === '1',
});
</script>
