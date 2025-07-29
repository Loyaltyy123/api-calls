import axios from "axios";
import { useRef, useState } from "react";

const DeleteComp = () => {
  const userIdRef = useRef(null);
  const [message, setMessage] = useState("");

  const delete_user = async () => {
    try {
      const userId = userIdRef.current.value;
      const res = await axios.delete(`https://reqres.in/api/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

       
      if (res.status === 204) {
        setMessage(`User with ID ${userId} deleted successfully.`);
      } else {
        setMessage(`Failed to delete user.`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <input type="number" placeholder="Enter user ID to delete" ref={userIdRef} />
      <button onClick={delete_user}>Delete User</button>
      <p>{message}</p>
    </>
  );
};

export default DeleteComp;
