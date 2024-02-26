<template>
  <div class="w-full flex flex-col h-full">
    <header class="flex w-full p-4 justify-end">
      <nav class="flex gap-4">
        <router-link :to="{
          name: 'game'
        }">Game</router-link>
        <router-link :to="{
          name: 'settings'
        }">Settings</router-link>
      </nav>
    </header>

    <main class="flex justify-center">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>
