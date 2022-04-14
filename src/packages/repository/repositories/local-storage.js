import Repository from './repository'

export default class LocalStorageRepository extends Repository {
  constructor() {
    super('local-storage')
    if (typeof localStorage === 'undefined') {
      throw new Error('! Local-storage is not available !')
    }
  }
  setItem(key, value) {
    localStorage.setItem(key, value)
  }
  getItem(key) {
    return localStorage.getItem(key)
  }
  removeItem(key) {
    localStorage.removeItem(key)
  }
}
