import Repository from './repositories/repository'
import { MemoryStorageRepository, LocalStorageRepository } from './repositories'

/**
 * @type {Repository}
 */
export let storage = null

/**
 * @param {('memory-storage'|'local-storage')} type
 */
function createStorage(type) {
  switch (type) {
    case 'local-storage':
      return new LocalStorageRepository()
    case 'memory-storage':
      return new MemoryStorageRepository()
    default:
      throw new Error(`Unknown storage type: ${type}`)
  }
}

/**
 * @param {('memory-storage'|'local-storage')} type
 */

export function initialize(type = 'local-storage') {
  if (!storage) storage = createStorage(type)
  return storage
}
