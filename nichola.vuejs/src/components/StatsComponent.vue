<script setup lang="ts">
import type { EdgeStatistics } from '@/models/DialogueGraph';
import { onMounted, onUnmounted, ref } from 'vue';

const creativity = ref(0);
const knowledge = ref(0);
const skill = ref(0);

const eventHandler = (event: CustomEvent<EdgeStatistics>) => {
    const statsData = event.detail;
    creativity.value += statsData.creativity;
    knowledge.value += statsData.knowledge;
    skill.value += statsData.skill;
};

onMounted(() => {
    window.addEventListener('stats-changed', eventHandler as EventListener);
});

onUnmounted(() => {
    window.removeEventListener('stats-changed', eventHandler as EventListener);
});
</script>

<template>
    <main id="statsContainer" class="grid-container">
        <div class="item1">Creativity</div>
        <div class="item2">{{ creativity }}</div>
        <div class="item3">Knowledge</div>
        <div class="item4">{{ knowledge }}</div>
        <div class="item5">Skill</div>
        <div class="item6">{{ skill }}</div>
    </main>
</template>

<style scoped>
#statsContainer {
    position: fixed;
    width: 300px;
    height: 160px;
    left: 10px;
    top: 10px;
    padding: 5px 10px 5px 5px;
    border-radius: 5px;

}

.grid-container {
    display: grid;
    grid: auto / 80% 20%;
    grid-gap: 5px;
    background-color: rgba(180, 122, 152);
    border-radius: 5px;
}

.grid-container>div {
    text-align: left;
    background-color: rgb(187, 139, 164);
    padding: 11px 5px 5px 5px;
    font: bold large papyrus;
}

/* font values text collumn */
.item1 {
    color: rgb(155, 75, 75);
}

.item3 {
    color: rgb(99, 99, 145);
}

.item5 {
    color: rgb(137, 102, 165);
}
</style>
