import React from "react";

function UserList() {
    const users = [
        { id: 1, name: "Suhani", age: 19 },
        { id: 2, name: "Vinit", age: 20 },
        { id: 3, name: "Mann", age: 20 },
      ];

  return (
    <div>
      <h2>User List</h2>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;