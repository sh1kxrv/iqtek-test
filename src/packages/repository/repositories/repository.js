export default class Repository {
  constructor(name) {
    this.name = name
  }
  /**
   * Перезаписать элемент в хранилище
   * @param {string} key
   * @param {string} value
   */
  setItem(key, value) {}

  /**
   * Получить элемент из хранилища
   * @param {string} key
   */
  getItem(key) {}

  /**
   * Удалить элемент из хранилища
   * @param {string} key
   */
  removeItem(key) {}
}
