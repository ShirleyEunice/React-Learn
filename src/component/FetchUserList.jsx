import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

const FetchUserList = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUSers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUserList(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUSers();
  }, []);

  return (
    <div>
      <h1>Fetch User Details</h1>
      {loading ? (
        <Loader size={55} />
      ) : (
        <div>
          {userList.map((u) => (
            <div key={u.id}>
              <h3>Name: {u.name}</h3>
              <p>Email:{u.email}</p>
            </div>
          ))}
        </div>
      )}
      if(error){<h2>{error}</h2>}
    </div>
  );
};

export default FetchUserList;
