import { useContext } from "react";
import Special from "../../../Special/Specia";
import { AssedContext } from "../../GrandPa";

const MySelf =({assed})=>{
    const gift =useContext(AssedContext)
    return (
        <div>
            <h1>Mysel this page</h1>
            <section >
<Special assed={assed}></Special>
<p>{gift}</p>
            </section>
        </div>
    )
}
export default MySelf;