import { storage } from '~/packages/repository'
import { createUser } from '~/utils/user'
export default function (users) {
  const getUserIndex = (id) => users.value.findIndex((usr) => usr.id === id)

  const save = () => storage.setItem('users', JSON.stringify(users.value))

  const add = (name) => {
    users.value.push(createUser(name))
    save()
  }

  const remove = (id) => {
    const userIndex = getUserIndex(id)
    users.value.splice(userIndex, 1)
    save()
  }

  const edit = (id, newName) => {
    const userIndex = getUserIndex(id)
    users.value[userIndex].name = newName
    save()
  }

  return {
    save,
    remove,
    add,
    edit,
  }
}
