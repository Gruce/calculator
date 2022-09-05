<template>
  <!-- Application -->
  <div p="4">
    <UiTabGroup  class="bg-[url('https://i.pinimg.com/736x/ee/50/de/ee50dec983d90280a90a40afbe5be29d.jpg')]" :col="false" :tabs="['الحاسبة', 'سجل النتائج', 'عن المبرمج']">
        <template #tab-1>
          <SimpleCalculatorAppCalc />
        </template>
        <template #tab-2>
          <h1>About</h1>
        </template>
        <template #tab-3>
          <h1>Contact</h1>
        </template>
    </UiTabGroup>
  </div>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});

</script>
