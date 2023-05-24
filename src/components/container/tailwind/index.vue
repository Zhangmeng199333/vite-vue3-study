<template>
  <!-- <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-gray-800">Hello Tailwind CSS!</h1>
      <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
      <button class="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
        Click me!
      </button>
    </div>
  </div> -->
  <nav class="flex justify-between items-center p-4 bg-gray-800 text-white">
    <a href="#" class="font-bold">Logo</a>
    <ul class="flex">
      <li><a href="#" class="mx-2">Home</a></li>
      <li><a href="#" class="mx-2">About</a></li>
      <li><a href="#" class="mx-2">Contact</a></li>
    </ul>
  </nav>
  <div>
    添加 flex 类到父元素上，这将启用 flex 布局。 根据需要添加其他
    flex相关的类来控制子元素的排列方式，例如： flex-row：水平排列子元素。
    flex-col：垂直排列子元素。 flex-wrap：当子元素超出容器宽度时换行。
    justify-start、justify-end、justify-center、justify-between、justify-around：控制子元素在主轴上的对齐方式。
    items-start、items-end、items-center、items-baseline、items-stretch：控制子元素在交叉轴上的对齐方式。
    flex-1：将子元素的宽度或高度设置为 1，以填充剩余的空间。
  </div>
  <h3>两栏布局</h3>
  <div class="flex">
    <!-- 左侧栏 -->
    <div class="w-1/4 bg-gray-100">
      <p>左侧栏</p>
    </div>
    <!-- 右侧内容 -->
    <div class="w-3/4 bg-slate-400">
      <p>右侧内容</p>
    </div>
  </div>
  <h3>三栏布局</h3>
  <div class="flex">
    <!-- 左侧栏 -->
    <div class="w-1/4 bg-gray-100">
      <p>左侧栏</p>
    </div>
    <!-- 主要内容 -->
    <div class="w-1/2">
      <p>主要内容</p>
    </div>
    <!-- 右侧栏 -->
    <div class="w-1/4 bg-gray-100">
      <p>右侧栏</p>
    </div>
  </div>
  <h3>等分布局</h3>
  <div class="flex">
    <div class="flex-1 p-4 bg-gray-100">
      <p>等分1/3</p>
    </div>
    <div class="flex-1 p-4 bg-gray-200">
      <p>等分1/3</p>
    </div>
    <div class="flex-1 p-4 bg-gray-300">
      <p>等分1/3</p>
    </div>
  </div>
  <h3>响应式布局</h3>
  <div class="flex flex-col md:flex-row">
    <!-- 左侧栏 -->
    <div class="w-full md:w-1/3 p-4 bg-gray-100">
      <h2 class="text-lg font-medium mb-4">左侧栏</h2>
      <ul class="list-disc pl-4">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
    <!-- 右侧内容 -->
    <div class="w-full md:w-2/3 p-4 bg-white">
      <h2 class="text-lg font-medium mb-4">右侧内容</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
        dolor.
      </p>
    </div>
    <div :class="{ dark: isDark }">
      <div class="bg-white text-base dark:bg-black dark:text-white">
        <p>text text text</p>
      </div>
    </div>
    <button @click="changeTheme">Change Theme</button>

    <!-- <el-button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click me
    </el-button> -->
  </div>
  <h1 class="Fw(b) Fz(2rem) C(red)">Welcome!</h1>
</template>

<script setup>
import { ref } from "vue";
const isDark = ref(false);
const changeTheme = () => {
  isDark.value = !isDark.value;
  const html = document.querySelector("html");
  html.classList.add("dark");
  console.log(isDark.value);
};
</script>

<style lang="scss" scoped></style>
