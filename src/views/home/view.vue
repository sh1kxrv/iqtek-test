<script>
import BlockForm from '~/components/block/form.vue'
import BlockUserList from '~/components/block/user-list.vue'
import useUserRepository from '~/composable/user-repository'
export default {
  name: 'HomeView',
  components: {
    BlockForm,
    BlockUserList,
  },
  setup() {
    const { users, add, remove, edit } = useUserRepository()
    return {
      users,
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="home">
      <block-form class="home__form" />
      <block-user-list class="home__list" :entities="users" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
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
}
</style>
