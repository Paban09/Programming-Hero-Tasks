import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const AssetContext=createContext('gold');

const Grandpa = () => {
    const asset='diamond';
    return (
        <div className="grandpa">
           <h2>Grandpa</h2> 
           
           <AssetContext.Provider value="silver">
            <section className="flex">
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
            </section>
           </AssetContext.Provider> 
        </div>
    );
};

export default Grandpa;