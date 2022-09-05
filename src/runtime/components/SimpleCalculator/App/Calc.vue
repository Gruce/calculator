<template>
    <div>
        <div flex="~ gap-4" mb="4" p="4">
            <UiInput v-model="firstNumber" w="full" label="الرقم الأول" placeholder="أكتب الرقم الاول" type="text" />
            <UiInput v-model="secondNumber" w="full" label="الرقم الثاني" placeholder="أكتب الرقم الثاني" type="text" />
        </div>

        <!-- <UiButton @click="sum()">+</UiButton> -->

        <div text="primaryOp dark:primary" mt="4" p="4">
            <div>الناتج: {{ result }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from '#imports'

const firstNumber = ref(0);
const secondNumber = ref(0);
const result = computed(() => parseInt(firstNumber.value) + parseInt(secondNumber.value));

// const sum = () => {
//   result.value = parseInt(firstNumber.value) + parseInt(secondNumber.value);
// }
</script>