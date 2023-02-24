<template>
  <h1>条件渲染</h1>
  <div v-if="showContent">我是渲染内容</div>
  <div v-else>我是另一个内容</div>
  <el-button @click="showContent = !showContent">切换</el-button>
  <template v-if="showList">
    <h1>title</h1>
    <p>控制的内容不止一个</p>
    <p>控制的内容不止一个</p>
    <p>控制的内容不止一个</p>
    <p>控制的内容不止一个</p>
  </template>
  <el-button @click="showList = !showList">切换</el-button>
  <div v-show="showTitle">v-show控制显示隐藏</div>
  <el-button @click="showTitle = false">切换</el-button>
  <div>不支持template元素上使用</div>
  <list />
</template>

<script setup>
import { ref } from "vue";
import List from "./List.vue";
const showContent = ref(true);
const showList = ref(true);
const showTitle = ref(true);
</script>

<style scoped>

</style>
