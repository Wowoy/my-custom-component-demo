<template>
  <div id="app">
    <!-- 自定义按钮组件 -->
    <my-button type="primary">按钮组件</my-button>
     <!-- 运用v-model自定义计数器组件 -->
    <my-counter v-model="value"></my-counter>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return  {
      value:0
    }
  },
  methods: {
     
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
