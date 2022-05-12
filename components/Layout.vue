<template>
  <div class="main-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>
  .main-layout {
    background-color: #F7F4EC;
    height: 100vh;
  }
</style>
