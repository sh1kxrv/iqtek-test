<script>
import AppBlock from '~/components/app/block.vue'
import CommonInput from '~/components/common/input.vue'
import CommonButton from '~/components/common/button.vue'

import { ref, inject, watch, toRef } from 'vue'
export default {
  name: 'BlockForm',
  components: {
    AppBlock,
    CommonInput,
    CommonButton,
  },
  props: {
    isEdit: Boolean,
    selectedEntity: {
      type: Object,
    },
  },
  emits: ['cancel-edit'],
  setup(props, { emit }) {
    const selectedEntity = toRef(props, 'selectedEntity')

    const username = ref('')
    const { add, edit } = inject('user-repository')
    const addClick = () => {
      add(username.value)
      username.value = ''
    }

    const cancel = () => {
      emit('cancel-edit')
      username.value = ''
    }

    const saveClick = () => {
      edit(selectedEntity.value.id, username.value)
      cancel()
    }

    const cancelClick = () => cancel()

    watch(selectedEntity, (val) => {
      if (val) username.value = val.name
    })

    return {
      username,

      addClick,
      saveClick,
      cancelClick,
    }
  },
}
</script>

<template>
  <app-block class="form">
    <common-input
      v-model="username"
      placeholder="Введите имя пользователя"
      label="Имя пользователя" />
    <div class="form__controls" v-if="!isEdit">
      <common-button @click="addClick"> Добавить </common-button>
    </div>
    <div class="form__controls" v-else>
      <common-button @click="saveClick"> Сохранить </common-button>
      <common-button @click="cancelClick"> Отмена </common-button>
    </div>
  </app-block>
</template>

<style scoped lang="scss">
.form {
  &__controls {
    margin-top: 18px;
    display: flex;
    align-items: center;
    gap: 0 12px;
  }
}
</style>
