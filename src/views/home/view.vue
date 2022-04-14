<script>
import { provide, ref } from 'vue'

import BlockForm from '~/components/block/form.vue'
import BlockUserList from '~/components/block/user-list.vue'
import useUserRepository from '~/composable/user-repository'

import { storage } from '~/packages/repository'
export default {
  name: 'HomeView',
  components: {
    BlockForm,
    BlockUserList,
  },
  setup() {
    const users = ref(JSON.parse(storage.getItem('users') || '[]'))

    const isEdit = ref(false)
    const selectedEntity = ref(null)

    const turnEdit = (state, entity) => {
      selectedEntity.value = entity
      isEdit.value = state
    }

    const cancelEdit = () => turnEdit(false, null)

    const { add, remove, edit } = useUserRepository(users)
    provide('user-repository', { add, remove, edit })

    provide('turn-edit', turnEdit)

    return {
      users,

      isEdit,
      selectedEntity,

      cancelEdit,
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="home">
      <block-form
        class="home__form"
        :is-edit="isEdit"
        :selected-entity="selectedEntity"
        @cancel-edit="cancelEdit" />
      <block-user-list class="home__list" :entities="users" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 24px;
}
.home {
  margin-top: 48px;
  display: grid;
  gap: 0 16px;
  grid-template-columns: repeat(2, 0.5fr);
  grid-template-areas:
    'form list'
    '. list';
  grid-template-rows: min-content 1fr;
  &__form {
    grid-area: form;
  }
  &__list {
    grid-area: list;
  }

  @media screen and (max-width: 720px) {
    display: block;
    padding: 0 24px;
    &__list {
      margin-top: 24px;
    }
  }
}
</style>
