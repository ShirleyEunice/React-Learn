import React, { useState } from 'react'

const initialUsers = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Arun" },
  { id: 4, name: "Sneha" }
];

const UserList = () => {
    const [users, setUsers] = useState(initialUsers)
    const handleDelete = (id)=>{
        const updatedUsers = users.filter((user) => user.id !== id)
        setUsers(updatedUsers);
    }
  return (
    <div>
        <h1>Users</h1>
        <ul>{users.map((u)=>(
            <div key={u.id}>
                <li >{u.name}</li>
                <button onClick={()=> handleDelete(u.id)}>Delete</button>
            </div>
            
        ))}</ul>
    </div>
  )
}

export default UserList