<script>
import { toRef, ref } from 'vue'
import AppBlock from '~/components/app/block.vue'
import CommonInput from '~/components/common/input.vue'
import EntitiesUserEntity from '~/components/entities/user-entity.vue'
import useUserSearch from '~/composable/user-search'
export default {
  name: 'BlockUserList',
  components: {
    AppBlock,
    CommonInput,
    EntitiesUserEntity,
  },
  props: {
    entities: {
      type: Array,
      default() {
        return []
      },
    },
  },
  setup(props) {
    const { search, filtered } = useUserSearch(toRef(props, 'entities'))
    return {
      filtered,
      search,
    }
  },
}
</script>

<template>
  <app-block class="list">
    <div class="list__searchbar">
      <common-input v-model.trim="search" placeholder="Начните вводить" icon="search" />
    </div>
    <div class="list__entities">
      <entities-user-entity v-for="entity of filtered" :instance="entity" :key="entity.id" />
    </div>
  </app-block>
</template>

<style scoped lang="scss">
.list {
  padding: 0;
  &__searchbar {
    padding: 18px 18px 0 18px;
  }
  &__entities {
    padding: 18px;
    min-height: 600px;
    max-height: 600px;
    overflow-x: hidden;
    overflow-y: auto;
    @include scrollbar;

    &:deep(.entity) {
      margin-top: 8px;
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
