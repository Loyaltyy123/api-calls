




import DeleteComp  from "./LMPL0262/DeleteComp";
import GetComp from "./LMPL0262/GetComp";
import PostComp from "./LMPL0262/PostComp";
import PutComp from "./LMPL0262/PutComp";

const Master =()=>{

    return(
       <>
        <GetComp></GetComp>
        <PostComp></PostComp>
        <PutComp></PutComp>
        <DeleteComp></DeleteComp>
       </>
    )

}
export default Master;