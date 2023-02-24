<template>
  <h3>3、class与style的绑定</h3>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">1212</div>
  <div :class="classObj">绑定对象</div>
  <child-com class="baz"></child-com>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">绑定内联样式</div>
  <div :style="styleObj">直接绑定样式对象</div>
</template>

<script setup>
import { ref, reactive } from "vue";
import ChildCom from "./Children.vue";
const isActive = ref(true);
const hasError = ref(true);
const classObj = reactive({
  active: true,
  "text-danger": false,
});
const activeColor = ref("purple");
const fontSize = ref("40");
const styleObj = reactive({
  color: "red",
  fontSize: "14px",
});
</script>

<style scoped>
.static {
  font-size: 16px;
  color: red;
}

.text-danger {
  font-weight: 800;
}
</style>
