<template>
  <h1>v-for 列表渲染</h1>
  <ul>
    <li v-for="(item, index) in items" :key="item">
      {{ index + 1 }} - {{ item.message }}
    </li>
  </ul>
  <p>等价于</p>
  <ul>
    <li v-for="({ message }, index) in items">{{ index + 1 }}{{ message }}</li>
  </ul>
  <h1>v-for与对象</h1>
  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index + 1 }}-{{ key }} : {{ value }}
    </li>
  </ul>
  <h1>v-for里使用范围值,n初始值为1，不是0</h1>
  <ul>
    <li v-for="n in 10">{{ n }}</li>
  </ul>
  <h1>template上的v-for</h1>
  <ul>
    <template v-for="item in List">
      <li>{{ item.msg }}</li>
      <li class="divider" role="presentation">{{ item.role }}</li>
    </template>
  </ul>
  <h1>v-for与v-if</h1>
  <ul>
    <template v-for="todo in todos">
      <li v-if="!todo.isComplete">
        {{ todo.name }}
      </li>
    </template>
  </ul>
  <h1>key管理状态</h1>
  <ul>
    <template v-for="(todo, index) in todos" :key="todo.name">
      <li @click="handleClick(index)">{{ index + 1 }} : {{ todo.name }}</li>
    </template>
  </ul>
</template>

<script setup>
import { ref, reactive } from "vue";
const items = ref([{ message: "jude" }, { message: "summer" }]);
const myObject = reactive({
  title: "遍历对象所有属性",
  author: "jude",
  age: "18",
});
const List = reactive([
  { msg: "123", role: "admin" },
  { msg: "456", role: "test" },
]);
const todos = reactive([
  { name: "vue", isComplete: true },
  { name: "js", isComplete: true },
  { name: "react", isComplete: false },
]);
const handleClick = (index) => {
  todos.splice(index, 1);
};
</script>

<style scoped>

</style>
