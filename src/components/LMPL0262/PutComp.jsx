import axios from "axios";
import { useRef, useState } from "react";

const PutComp = () => {
  const put_name = useRef(null);
  const put_job = useRef(null);
  const [updatedEmp, setUpdatedEmp] = useState({});

  const update_user = async () => {
    const res = await axios.put(
      "https://reqres.in/api/users/2", 
      {
        name: put_name.current.value,
        job: put_job.current.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
          
        },
      }
    );

    const { data } = res;
    setUpdatedEmp(data);
  };

  return (
    <>
      <input type="text" placeholder="Enter name" ref={put_name} />
      <input type="text" placeholder="Enter job" ref={put_job} />
      <button onClick={update_user}>Update Details</button>
      <p>{JSON.stringify(updatedEmp)}</p>
    </>
  );
};

export default PutComp;
