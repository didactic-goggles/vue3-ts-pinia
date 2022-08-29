<template>
  <div class="about">
    <h1>Counter Page</h1>
    <h2>{{ count }}</h2>
    <h3>{{ doubleCount }}</h3>
    <input type="number" v-model.number="addCount">
    <h4>{{ addCount }}</h4>
    <button @click="increment">Increment</button>
    <button @click="incrementWithPayload(addCount)">Increment With Payload</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore();
const addCount = ref(0);
const { count, doubleCount } = storeToRefs(store)
const { increment, incrementWithPayload } = store
</script>

<style>
</style>
