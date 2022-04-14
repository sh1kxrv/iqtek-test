<script>
export default {
  name: 'AppHeader',
  setup(props) {},
}
</script>

<template>
  <header class="header">
    <h1 class="header__title">IQTek | Test</h1>
  </header>
</template>

<style scoped lang="scss">
.header {
  text-align: center;
  padding: 24px 0;
  &__title {
    @include font_header_h1;
  }
}
</style>
