import { useEffect, useState } from "react";
import axios from "axios";

const PutComp=()=>{
    const[emp2,setEmp2]=useState();
    const[id,setId]=useState();
    const[title,setTitle]=useState();
    const[body,setBody]=useState();
    const[userId,setUserId]=useState();
    const get_user_details2=async()=>{
        const res=await axios.put(`https://jsonplaceholder.typicode.com/posts/1`,{id:1,title:'updated Title',body:'Updated body',userId:1},{headers:{"Content-Type":"application/json","x-api-key": "reqres-free-v1","Authorization":`Bearer ${localStorage.getItem("token")}`}})
        const {data}=res;
        setEmp2(data);
        console.log(data);
    }

    useEffect(()=>{
        get_user_details2();
    });

    return(
        <>
        <p>{JSON.stringify(emp2)}</p>
        </>
    )
}
export default PutComp;