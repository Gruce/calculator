<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  import { useAppManager } from '#imports'

  const appManager = useAppManager()
  // App Configuration
  appManager.addApp({
      "name": "SimpleCalculator",
      "title": "حاسبة بسيطة",
      "minWidth": 400,
      "minHeight": 300,
  })
</script>