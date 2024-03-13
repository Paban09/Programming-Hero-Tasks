import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);
    const [visitedFlags,setVisitedFlags]=useState([]);

    //remove
    

    const handleVisitedFlags=flag=>{
        console.log('visited Flag')
        if (!visitedFlags.includes(flag)){
            const newVisitedFlags=[...visitedFlags,flag];
            setVisitedFlags(newVisitedFlags);
        }
    }

    const handleVisitedCountry=country=>{
        console.log('Add this to your visited country')
        if (!visitedCountries.includes(country)){
            const newVisitedCountries=[...visitedCountries,country];
            setVisitedCountries(newVisitedCountries);
        }
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res=>res.json())
            .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries = {countries.length}</h3>
            {/* visited country */}
            <div>
                <h5>visited Countries {visitedCountries.length}</h5>
                <ul>
                   {
                    visitedCountries.map(visited=>
                        <li key={visited.cca3}>{visited.name.common}</li>
                    )
                   }
                </ul>
            </div>

            <div className='image-flag-container'>
                {
                   visitedFlags.map((flags,idx)=>
                    <img key={idx} src={flags} alt="" />
                   )
                }
            </div>

            {/* Display Country */}
            <div className="country-container">
                {
                    countries.map(country=> 
                    <Country 
                        key={country.cca3} 
                        handleVisitedFlags={handleVisitedFlags}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}>
                    </Country>)
                }
            </div>
            
            
        </div>
    );
};

export default Countries;