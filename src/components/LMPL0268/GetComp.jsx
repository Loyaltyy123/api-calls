import axios from "axios";
import { useEffect, useState ,useRef} from "react";
const GetComp = ()=>{
    const [emp,setEmp] = useState({});
    const ref1=useRef()
    const get_user_details = async ()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users',{headers:{"Content-Type": "application/json",
                                                                    "x-api-key": "reqres-free-v1",
                                                                  "Authorization": `Bearer ${localStorage.getItem("token")}`}})
        const {data} = res;
       
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