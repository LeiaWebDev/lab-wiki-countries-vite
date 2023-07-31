import React, { useEffect } from "react";
import HomePage from "./HomePage";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


function CountryDetails() {

    const [countryDetails, setCountryDetails] = useState(null)
    const params = useParams()
    

    async function fetchCountryDetails(){
        try {
            const rawResponse = await fetch("https://ih-countries-api.herokuapp.com/countries")
            const data  = await rawResponse.json()
            // console.log(data)
            const countryDetail = data.find((country) => country.alpha3Code.toLowerCase() === params.alpha3Code.toLowerCase());
            setCountryDetails(countryDetail)
        } catch (error) {
            console.log(error)
        }
    }

   
    useEffect(() => {
        
        fetchCountryDetails()
    
    }, [params.alpha3Code])

    if (!countryDetails){
        return (
            <div>loading...</div>
        )
    }


return (
    <>
    <div>
        {/* <h1>Country details</h1> */}
        {/* <!-- Country Details Page -->

    <div>
      {/* <!-- Navbar --> */}

      {/* <!-- Bootstrap container wrapper div --> */}
      <div className="container">
        <p style= {{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>

        <h1>{countryDetails.name.common}</h1>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt={countryDetails.name.common}></img>
        
        
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{countryDetails.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                   {countryDetails.borders.map((borderCode) =>{
                    return(
                        <li key = {borderCode}>
                            <Link to={`/countries/${borderCode.toLowerCase()}`}>
                            {borderCode.toLowerCase()}
                            </Link>
                        </li>                        
                        )
                   }) }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/* </div> */}
    </>
)

}

export default CountryDetails;
