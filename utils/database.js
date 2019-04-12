import Users from './users'
import fs from 'browserify-fs'

const usersStr = JSON.stringify(Users)
const usersObj = JSON.parse(usersStr)

const getUsersList = () => {
  return usersObj || []
}

const findUser = (login) => {
  return usersObj.find(user => user.login === login)
}

const insertUser = (user) => {
  const userExists = usersObj.find(u => u.id === user.id)
  if (!userExists) {
    usersObj.push(user)
    console.log('usersObj: ', usersObj)
    fs.writeFile('./users.json', JSON.stringify(usersObj), () => {
      fs.readFile('./users.json', 'utf-8', (err, data) => {
        if (err) return err

        console.log('data: ', data)
      })
    })
    return user
  } else {
    throw new Error(`User ${user.name} already exists`)
  }
}

export const database = {
  getUsersList,
  insertUser,
  findUser
}
