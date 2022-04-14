<script>
import AppBlock from '~/components/app/block.vue'
import CommonInput from '~/components/common/input.vue'
import CommonButton from '~/components/common/button.vue'
export default {
  name: 'BlockForm',
  components: {
    AppBlock,
    CommonInput,
    CommonButton,
  },
  setup(props) {},
}
</script>

<template>
  <app-block class="form">
    <common-input placeholder="Введите имя пользователя" label="Имя пользователя" />
    <div class="form__controls">
      <common-button> Добавить </common-button>
    </div>
  </app-block>
</template>

<style scoped lang="scss">
.form {
  &__controls {
    margin-top: 18px;
  }
}
</style>
