<script>
export default {
  name: 'CommonButton',
}
</script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 12px 24px;

  transition: $t background-color, $t opacity, $t color;

  background-color: $primary-color;
  color: $primary-black;
  @include font_button;

  border-radius: $border-radius-control;

  &:hover {
    background-color: $primary-black;
    color: $main-white;
  }
  &:active {
    opacity: 0.7;
  }
}
</style>
