import { useEffect, useState } from "react";
import axios from "axios";

const PostComp=()=>{
    const[emp1,setEmp1]=useState();
    const[title,setTitle]=useState();
    const[body,setBody]=useState();
    const[userId,setUserId]=useState();
    const get_user_details1=async()=>{
        const res=await axios.post(`https://jsonplaceholder.typicode.com/posts`,{title:'New Post',body:'This is a new post',userId:1},{headers:{"Content-Type":"application/json","x-api-key": "reqres-free-v1","Authorization":`Bearer ${localStorage.getItem("token")}`}})
        const {data}=res;
        setEmp1(data);
        console.log(data);
    }
    useEffect(()=>{
        get_user_details1();

    },[]);
    return(
        <>
        <p>{JSON.stringify(emp1)}</p>
        </>
    )
}
export default PostComp;