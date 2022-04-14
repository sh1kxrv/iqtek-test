import { computed, ref } from 'vue'

const format = (str) => str?.toLowerCase()?.trim()

export default function (entities) {
  const search = ref('')

  const filterIncludes = (entity) => {
    const lowerSearch = format(search.value)
    return format(entity.name).includes(lowerSearch)
  }
  const filtered = computed(() =>
    search.value.length > 0 ? entities.value.filter(filterIncludes) : entities.value
  )
  return {
    filtered,
    search,
  }
}
