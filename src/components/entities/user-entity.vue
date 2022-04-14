<script>
import { IconPerson, IconTrash } from '~/components/icons'
export default {
  name: 'UserEntity',
  components: {
    IconPerson,
    IconTrash,
  },
  props: {
    instance: {
      type: Object,
      required: true,
    },
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
      <h2 class="entity__number">
        {{ instance.id }}
      </h2>
    </div>
    <icon-wrapper width="24" height="24" class="entity__trash">
      <icon-trash />
    </icon-wrapper>
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
    @include font_user_name;
  }
  &__number {
    margin-top: 4px;
    @include font_user_number;
  }
  &__trash {
    color: $red-color;
  }
  &:hover,
  &-selected {
    border-color: $primary-color;
  }
}
</style>
