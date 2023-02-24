<template>
  <h3>1、watch侦听器</h3>
  <div>
    初始值：{{ state.count }} -- 当前值：{{ counts }} -- 上一个值：{{ prevCounts }}
  </div>
  <el-button @click="handleClick" type="primary" :disabled="state.count == 1">增 加</el-button>
  <h3>2、computed计算属性</h3>
  <p>{{ author.skills.length > 0 ? "yes" : "no" }}</p>
  <p>{{ authorSkillList }}</p>
  <p>具有缓存，Date.now()不是响应式依赖 {{ now }}</p>
  <p>可写计算属性：set get {{ fullName }}</p>
  <p>
    计算属性的getter属性应只做计算而没有任何其他的副作用。不要在getter中做异步请求或者更改DOM
  </p>
</template>

<script setup>
import { ref, reactive, watch, computed } from "vue";
const state = reactive({ count: 0 });
const counts = ref(0);
const prevCounts = ref(0);
const handleClick = () => {
  state.count++;
};
watch(
  () => state.count,
  (count, prevCount) => {
    counts.value = count++;
    prevCounts.value = prevCount++;
    // console.log('当前count' + count, '上一个prevCount' + prevCount)
  }
);
const author = reactive({
  name: "Jude",
  skills: ["js", "html", "css"],
});
const authorSkillList = computed(() => {
  // return author.skills.length > 0 ? "yes" : "no";
  return author.skills.includes("js");
});
const now = computed(() => Date.now());
const firstName = ref("Jude");
const lastName = ref("Summer");
const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
</script>

<style scoped>

</style>
