import React from 'react'
import { users } from '../data/users'
import Button from './Button'
import TableRow from './TableRow'

function Table() {
    let [data, setData]=useState(users);
    function handleDelete(id){
        setData(data.filter((user)=>user.id ))
    }
  return (
    <div>
      
    </div>
  )
}

export default Table
