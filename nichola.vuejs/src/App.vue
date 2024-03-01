<script setup lang="ts">
import DialogueComponent from './components/DialogueComponent.vue'
import TextOutputComponent from './components/TextOutputComponent.vue';

</script>

<template>
    <main>
        <div class="flex-container">
            <DialogueComponent />
            <TextOutputComponent />
        </div>

    </main>
</template>

<style scoped>
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