<script setup lang="ts">
    import MessageComponent from './components/MessageComponent.vue'
    import { ref } from 'vue'
    let myMessage = ref('Hi!');
    let hiMessage = "Hi!";
    let nicholaMessage = "Nichola"

    const changeMessage = () => {
        if (myMessage.value == hiMessage) {
            myMessage.value = nicholaMessage;
            return;
        }

        myMessage.value = hiMessage
    };
</script>

<template>
    <main>
        <header></header>
        <MessageComponent @click="changeMessage" :msg="myMessage" />
    </main>
</template>