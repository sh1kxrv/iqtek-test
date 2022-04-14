<script>
import { inject } from 'vue'
import { IconPerson, IconTrash, IconEdit } from '~/components/icons'
export default {
  name: 'UserEntity',
  components: {
    IconPerson,
    IconTrash,
    IconEdit,
  },
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { remove, turnEditMode } = inject('user-repository')

    const editUser = () => turnEditMode(props.instance)
    const removeEntity = (id) => remove(id)

    return {
      removeEntity,
      editUser,
    }
  },
}
</script>

<template>
  <div class="entity">
    <icon-wrapper width="24" height="24" class="entity__person">
      <icon-person />
    </icon-wrapper>
    <div class="entity__info">
      <h1 class="entity__name">
        {{ instance.name }}
      </h1>
      <h2 class="entity__number">№ {{ instance.id }}</h2>
    </div>
    <div class="entity__controls">
      <icon-wrapper @click="editUser" width="24" height="24" class="entity__edit">
        <icon-edit />
      </icon-wrapper>
      <icon-wrapper @click="removeEntity" width="24" height="24" class="entity__trash">
        <icon-trash />
      </icon-wrapper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.entity {
  display: flex;
  align-items: center;

  padding: 12px 18px;

  transition: $t border-color;

  border: 1px solid $border-color;
  border-radius: $border-radius-control;

  color: $primary-black;

  &__person {
    margin-right: 16px;
  }
  &__info {
    flex-grow: 1;
  }
  &__name {
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @include font_user_name;
  }
  &__number {
    margin-top: 4px;
    @include font_user_number;
  }
  &__trash {
    color: $red-color;
    cursor: pointer;
  }
  &__edit {
    color: $inactive-icon;
    cursor: pointer;
  }
  &__controls {
    display: flex;
    align-items: center;
    gap: 0 8px;
  }
  &:hover,
  &-selected {
    border-color: $primary-color;
  }
}
</style>
