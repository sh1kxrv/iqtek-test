<script>
export default {
  name: 'IconWrapper',
  props: {
    width: {
      type: String,
      default: '24',
    },
    height: {
      type: String,
      default: '24',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :style="`min-width: ${width}px; min-height: ${height}px`"
    :viewBox="`0 0 ${width} ${height}`"
    role="presentation"
    v-bind="$attrs">
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<style scoped>
svg {
  display: block;
}
</style>
