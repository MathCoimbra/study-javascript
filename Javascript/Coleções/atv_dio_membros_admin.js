function getAdmins(map) {
  let admins = []

  for ([k, v] of map) {
    if (v === 'Admin') {
      admins.push(k)
    }
  }

  return admins
}

const users = new Map()

users.set('Math', 'Func')
users.set('Maria', 'Admin')
users.set('Ed', 'Admin')
users.set('Thi', 'Func')
users.set('Ju', 'Func')

console.log(getAdmins(users))
