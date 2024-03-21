import { createContext } from "react";
import Dad from "./Dad/Dad";
import Aunty from "./Dad/Uncle/Aunty/Aunty";
import Uncle from "./Dad/Uncle/Uncle";
import './GrandPa.css'
 export const AssedContext = createContext('Gold')
const GrandPa =()=>{
    const assed='Diamond'
    return (
        <div className="grandpa ">
            <h1>Grand Pa</h1>
           <AssedContext.Provider value="Gold">
           <section className="flex">
           <Dad assed={assed}></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
           </section>
           </AssedContext.Provider>

        </div>
    )
}
export default GrandPa;