import React, { useEffect, useState } from "react";
import CountryDetailsPage from "./CountryDetailsPage";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";

function HomePage() {
    
    const params = useParams()
    const [countriesList, setCountriesList] = useState ([])


    async function fetchCountries (){
        try {
            const rawResponse = await fetch ("https://ih-countries-api.herokuapp.com/countries")
            const data = await rawResponse.json()
            // console.log(data)
            setCountriesList(data)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    
    useEffect(() => {
        fetchCountries()
    
    }, [])
    

    // const countryToDisplay = countries.find(
    //     (country)  => country.slug === params.slug
    // )
    // no find as no json file locally and very slow


    return (
        <> 
        <div>
            <h1>
            WikiCountries: Your Guide to the World.
            </h1>
            {/* <!-- Home Page -->

            <div>
                
               {/* <Navbar/> */}
                {/* <!-- Bootstrap container wrapper div --> */}
                
            <div className="container" 
                style= {{maxHeight: "90vh", overflow: "scroll"}} >

                <h1 style={{fontSize: '24px'}}> WikiCountries: Your Guide to the World</h1>

                <div className="list-group">
                    <p>{countriesList.map((country) => {
                        return (
                            <Link key = {country._id} to={`/countries/${country.alpha3Code.toLowerCase()}`}> 
                            <h3>{country.name.common}</h3>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common}></img>
                            </Link>
                        )
                    } )}</p>
                
                </div>
            </div>
            
            {/* </div> */}
        </div>
   
        </>
    )
}


export default HomePage;
