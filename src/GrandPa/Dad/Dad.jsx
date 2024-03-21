import Brother from "../Myself/Brother/Brother";
import MySelf from "../Myself/Brother/MySelf";
import Sister from "../Myself/Brother/Sister/SIster";



const Dad =({assed})=>{
    return (
        <div>
<h1>Dad</h1>
<div>
  <MySelf assed={assed}></MySelf>
    <Brother></Brother>
    <Sister></Sister>
</div>
        </div>
    )
}
export default Dad;