import axios from "axios";
import { useRef, useState } from "react";
 
const PostComp = () => {
  const post_name = useRef(null);
  const post_job = useRef(null);
  const [newEmp, setEmp] = useState({});
 
  const post_user = async () => {
    
      const res = await axios.post(
        "https://reqres.in/api/users",
        {
          name: post_name.current.value,
          job: post_job.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1",
            
          },
        }
      );
 
      const { data } = res;
      setEmp(data);
     
  };
 
  return (
    <>
      <input type="text" placeholder="Enter name" ref={post_name} />
      <input type="text" placeholder="Enter job" ref={post_job} />
      <button onClick={post_user}>Post Details</button>
      <p>{JSON.stringify(newEmp)}</p>
    </>
  );
};
 
export default PostComp;
 