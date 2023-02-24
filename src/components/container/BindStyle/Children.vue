<template>
  <div :class="$attrs.class" class="foo">children 透传attribute</div>
  <span>children component</span>
</template>

<script setup></script>

<style scoped>
.foo {
  font-size: 16px;
  color: green;
}
</style>
