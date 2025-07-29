import { useEffect, useState } from "react";
import axios from "axios";

const DeleteComp=()=>{
    const[emp3,setEmp3]=useState();
    const get_user_details3=async()=>{
        const res=await axios.delete(`https://jsonplaceholder.typicode.com/posts/1`,{headers:{"Content-Type":"application/json","x-api-key": "reqres-free-v1","Authorization":`Bearer ${localStorage.getItem("token")}`}})
        const {data}=res;
        setEmp3(data);
        console.log(data);
    }

    useEffect(()=>{
        get_user_details3();
    });
    return(
        <>
        <p>{JSON.stringify(emp3)}</p>
        </>
    )
}
export default DeleteComp;