import Repository from './repository'
export default class MemoryStorageRepository extends Repository {
  #mem = {}
  constructor() {
    super('memory-storage')
  }
  setItem(key, value) {
    this.#mem[key] = value
  }
  getItem(key) {
    return this.#mem[key]
  }
  removeItem(key) {
    delete this.#mem[key]
  }
}
