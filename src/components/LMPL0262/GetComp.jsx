import { useEffect, useState } from "react";
import axios from "axios";

const GetComp = ()=>{
    const [emp,setEmp] = useState({});

    


    const get_user_details = async ()=>{
        const res = await axios.get(`https://reqres.in/api/users/2`, {headers:{"content-Type":"application/json","x-api-key": "reqres-free-v1"}})

        const {data:x}=res;
        const {data} = x;
        setEmp(data);
        console.log(data)
    }

    useEffect(()=>{
        get_user_details();
    },[]);


     



    return(
        <>

    <p>{JSON.stringify(emp)}</p>
        </>
    )

}
export default GetComp;