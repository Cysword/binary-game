<template>
  <Story
    title="Switch"
    :layout="{type: 'grid'}">
    <Variant title="unchecked">
      <Switch
        v-model="state.unchecked"
        name="unchecked">
        2
      </Switch>
    </Variant>

    <Variant title="checked">
      <Switch
        v-model="state.checked"
        name="checked">
        2
      </Switch>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import Switch from './Switch.vue';
import {reactive} from 'vue';

const state = reactive({
  unchecked: false,
  checked: true,
});
</script>
