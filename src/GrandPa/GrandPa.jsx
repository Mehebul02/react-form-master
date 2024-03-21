import Dad from "./Dad/Dad";
import Aunty from "./Dad/Uncle/Aunty/Aunty";
import Uncle from "./Dad/Uncle/Uncle";
import './GrandPa.css'
const GrandPa =()=>{
    return (
        <div className="grandpa ">
            <h1>Grand Pa</h1>
           <section className="flex">
           <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
           </section>

        </div>
    )
}
export default GrandPa;