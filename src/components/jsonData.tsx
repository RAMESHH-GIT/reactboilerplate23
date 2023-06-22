import React, { useState, useEffect } from 'react';

interface User {
  name: string;
  age: number;
  address: string;
}

const MyComponent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('/dataJson.json')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
