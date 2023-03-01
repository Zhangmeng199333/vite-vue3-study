<template>
  <div>title:{{ title }}</div>
  <div>data:{{ data }}</div>
  <div>子组件接受值：通过defineProps来接受defineProps是无须引入的直接使用即可</div>
  <div>
    withDefaults是个函数也是无须引入开箱即用接受一个props函数第二个参数是一个对象设置默认值
  </div>
  <div><button @click="handleSendList">send to father</button></div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

// defineProps<{
//   title: string;
//   data: number[];
// }>();
// ts特有传值
type Props = {
  title?: string;
  data?: number[];
};
withDefaults(defineProps<Props>(), {
  title: "于齐",
  data: () => [1, 2, 3],
});

const list = reactive<number[]>([4, 5, 6]);
const emit = defineEmits(["handle-send"]);
const handleSendList = () => {
  emit("handle-send", list);
};
</script>

<style scoped></style>
