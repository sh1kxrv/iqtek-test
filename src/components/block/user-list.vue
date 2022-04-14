<script>
import AppBlock from '~/components/app/block.vue'
import CommonInput from '~/components/common/input.vue'
import EntitiesUserEntity from '~/components/entities/user-entity.vue'
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
  setup(props) {},
}
</script>

<template>
  <app-block>
    <common-input placeholder="Начните вводить" icon="search" />
    <div class="list">
      <entities-user-entity v-for="entity of entities" :instance="entity" :key="entity.id" />
    </div>
  </app-block>
</template>

<style scoped lang="scss">
.list {
  margin-top: 18px;
  min-height: 600px;
  max-height: 600px;
  overflow: auto hidden;
  &:deep(.entity) {
    margin-top: 8px;
  }
}
</style>
