<template>
  <container />
</template>

<script setup>
import { ref, reactive } from 'vue'
import Container from '@/components/container/index.vue'
const counts = ref(1)
const obj = reactive({ count: 0 })
obj.count++
// ref解包
console.log(obj.count === counts.value) // true
</script>
