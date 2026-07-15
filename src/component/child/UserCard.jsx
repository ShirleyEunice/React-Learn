import React from 'react'

const UserCard = ({name, age, role, onNotify}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>

      <button onClick={()=> onNotify("Hello Parent")}>Notify Parent</button>
    </div>
  );
}

export default UserCard