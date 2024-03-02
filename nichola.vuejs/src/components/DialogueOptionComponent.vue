<script setup lang="ts">
import {DialogueNode} from '@/models/DialogueGraph'
defineProps<{
  optionPrompt: DialogueNode
}>()
</script>

<template>
  <div class="dialogueOption">
    {{ optionPrompt.message }}
  </div>
</template>

<style scoped>
.dialogueOption {
  margin: 5px;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(202, 161, 182, 0.8);
  text-align: center;
  width: 85%;
}

.dialogueOption:hover {
  background-color: rgba(202, 161, 182, 0.6);
  cursor: pointer;
}
</style>