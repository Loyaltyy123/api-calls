import axios from "axios";
import { useEffect, useState, useRef } from "react";
const PostComp = () => {
    
  
     const[emp,setEmp]=useState(null);

    const get_user_details1 = async () => {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                name: 'Test User',
                email: 'test@example.com',
                body: 'Great post!',
                postId: 1
            },
            {
                headers: {
                    " Content-Type": "application/json",
                    "x-api-key": "reqres-free-v1",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
        const { data } = res;

        setEmp(data);
        console.log(data)
    }


    useEffect(() => {
        get_user_details1();
    }, []);

    return (
        <>

            <p>{JSON.stringify(emp)}</p>
        </>
    )
}
export default PostComp;