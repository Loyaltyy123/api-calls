import axios from "axios";
import { useEffect, useState, useRef } from "react";
const PutComp = () => {


    const [emp, setEmp] = useState(null);

    const get_user_details = async () => {
        const res = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'Updated Title',
            body: 'Updated body',
            userId: 1
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
        get_user_details();
    }, []);

    return (
        <>

            <p>{JSON.stringify(emp)}</p>
        </>
    )
}
export default PutComp;