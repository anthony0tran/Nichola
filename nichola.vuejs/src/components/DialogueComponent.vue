<script setup lang="ts">
import { ref } from 'vue';
import DialogueOptionComponent from './DialogueOptionComponent.vue';

const items = ref([
    { message: 'Foo' },
    { message: 'Bar' },
    { message: 'Anthony' },
    { message: 'Nichola' }
])
</script>

<template>
    <main id="dialogueContainer">
        <DialogueOptionComponent v-for="item in items" :optionPrompt="item.message" />
    </main>
</template>

<style scoped>
#dialogueContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    position: relative;
    font-size: 50px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px 10px 15px;
}
</style>