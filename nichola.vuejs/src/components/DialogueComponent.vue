<script setup lang="ts">
import { ref } from 'vue';
import DialogueOptionComponent from './DialogueOptionComponent.vue';
import { DialogueHelpers } from '@/helpers/DialogueHelpers';

const dialogues = new DialogueHelpers();
// dialogues.constructDialogue();

const items = ref([
    { message: 'Foo' },
    { message: 'Bar' },
    { message: 'Anthony' },
    { message: 'Nichola' }
])
</script>

<template>
    <div class="flex-container">
        <main id="dialogueContainer">
            <DialogueOptionComponent v-for="item in items" :optionPrompt="item.message" />
            <div id="textOutputContainer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </main>
    </div>
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

#textOutputContainer {
    background-color: rgba(180, 122, 152, 0.8);
    border-radius: 8px;
    position: relative;
    font-size: 25px;
    margin-top: 80px;
    width: 100%;
    box-sizing: border-box;
    padding: 5px 0px 10px 15px;
}

.flex-container {
    display: flex;
    flex-direction: column;
    bottom: 20px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 0px 0px 20px;
    min-width: 70%;
}
</style>