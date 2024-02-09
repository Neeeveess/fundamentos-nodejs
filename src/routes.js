import { Database } from "./database.js"
import { randomUUID } from 'node:crypto'
import { buldRoutePath } from "./utils/build-route-path.js"

const database = new Database


export const routes = [
  {
    method: 'GET',
    path: buldRoutePath('/users'),
    handler: (req,res)=>{
      const users = database.select('users')

      return res.end(JSON.stringify(users))
    }
  },
  {
    method: 'POST',
    path: buldRoutePath('/users'),
    handler: (req,res)=>{
      const {name, email} = req.body

      const user ={
        id: randomUUID(),
        name,
        email
      }
  
      database.insert('users', user)
      return res.writeHead(201).end()
    }
  },
  {
    method: 'DELETE',
    path: buldRoutePath('/users/:id'),
    handler: () => {

    }
  }
]