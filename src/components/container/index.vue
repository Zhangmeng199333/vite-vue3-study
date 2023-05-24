<template>
  <div class="container">
    <el-tabs :tab-position="tabPosition" style="height: 100%" class="demo-tabs">
      <el-tab-pane label="watch-computed">
        <watch />
        <bind-style />
      </el-tab-pane>
      <el-tab-pane label="条件渲染">
        <render-com></render-com>
      </el-tab-pane>
      <el-tab-pane label="组件通信">
        <father></father>
      </el-tab-pane>
      <el-tab-pane label="ECharts">
        <basic-echarts></basic-echarts>
      </el-tab-pane>
      <el-tab-pane label="Tailwind CSS">
        <tailwind></tailwind>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Watch from "./watch/index.vue";
import BindStyle from "./BindStyle/index.vue";
import RenderCom from "./render/index.vue";
import Father from "./communicate/Father.vue";
import BasicEcharts from "./BasicEcharts/index.vue";
import Tailwind from "./tailwind/index.vue";

const tabPosition = ref("left");
</script>
<style>
.container {
  height: 100vh;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
}

.el-tabs__item.is-active {
  color: #fff;
  background-color: var(--el-color-primary);
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
