<script setup lang="ts">
import { ref, computed } from 'vue';
import DialogueOptionComponent from './DialogueOptionComponent.vue';
import { DialogueGraphConstructor } from '@/helpers/DialogueGraphConstructor';
import { DialogueNode } from '@/models/DialogueGraph'

const dialogues = new DialogueGraphConstructor();
dialogues.constructDialogue();

let dialogue = ref(dialogues.dialogueGraph.getCurrentNode);
let options = ref(dialogues.dialogueGraph.getCurrentNode?.getOptions());
let hasNextNode = computed(() => dialogue.value?.getNextDialogue() != null);

function continueDialogue(node: DialogueNode | null) {
    if (node == null) {
        return;
    }

    let nextDialogue = node.getNextDialogue();
    if (nextDialogue != null) {
        dialogue.value = nextDialogue;
        options.value = nextDialogue.getOptions()
        hasNextNode = computed(() => nextDialogue!.getNextDialogue() != null);
    }
}

</script>

<template>
    <div class="flex-container">
        <main id="dialogueContainer">
            <DialogueOptionComponent v-for="option in options" :optionPrompt="option" @click="continueDialogue(option)" />
            <div id="textOutputContainer" @click="continueDialogue(dialogue)"
                :class="{ 'textOutputContainer-hover': hasNextNode }">
                {{ dialogue?.message }}
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

.textOutputContainer-hover:hover {
    background-color: rgba(202, 161, 182, 0.6) !important;
    cursor: pointer;
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