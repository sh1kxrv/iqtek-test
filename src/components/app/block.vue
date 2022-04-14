<script>
export default {
  name: 'AppBlock',
}
</script>

<template>
  <div class="block">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.block {
  padding: 20px;
  border-radius: $border-radius;
  box-shadow: $block-shadow;
  background-color: $main-white;
}
</style>
