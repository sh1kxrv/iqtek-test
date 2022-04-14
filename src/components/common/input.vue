<script>
import { IconSearch } from '~/components/icons'
export default {
  name: 'CommonInput',
  components: {
    IconSearch,
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: String,
    label: String,
    icon: {
      type: String,
      validator(value) {
        return ['search'].includes(value)
      },
    },
  },
}
</script>

<template>
  <div>
    <p class="label" v-if="label">{{ label }}</p>
    <label class="input">
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        class="input__self" />
      <icon-wrapper v-if="icon" width="24" height="24" class="input__icon">
        <component :is="`icon-${icon}`" />
      </icon-wrapper>
    </label>
  </div>
</template>

<style scoped lang="scss">
.input {
  padding: 16px 20px;
  display: flex;
  align-items: center;

  transition: $t border-color;

  border: 1px solid $border-color;
  border-radius: $border-radius-control;

  background-color: $additional-white;

  cursor: text;

  &:focus-within,
  &:hover {
    border-color: $primary-color;
    .input {
      &__icon {
        transform: scale(1.1);
      }
    }
  }

  &__self {
    width: 100%;
    color: $primary-black;
    &::placeholder {
      color: rgba($primary-black, 0.3);
    }
  }
  &__icon {
    transition: $t transform;
    color: rgba($primary-black, 0.3);
  }
}

.label {
  @include font_label;
  color: rgba($primary-black, 0.4);
  margin-bottom: 4px;
}
</style>
