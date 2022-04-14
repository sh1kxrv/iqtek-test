import { computed } from 'vue'
export default function (search, entities) {
  const filterIncludes = (entity) => {
    const lowerSearch = search.value.toLowerCase()
    return entity.name.toLowerCase().includes(lowerSearch)
  }
  const filtered = computed(() =>
    search.value.length > 0 ? entities.value.filter(filterIncludes) : entities.value
  )
  return {
    filtered,
    search,
  }
}
