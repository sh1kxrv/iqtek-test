<script>
import AppHeader from '~/components/app/header.vue'
export default {
  name: 'LayoutDefault',
  components: {
    AppHeader,
  },
  setup(props) {},
}
</script>

<template>
  <div class="layout">
    <app-header />
    <div class="layout__root">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  &__root {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
