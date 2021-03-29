import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Weath from './Weath';

const Country = (props) => {
    const [Weather, setWeather] = useState({});
    const api_key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        console.log('effect')
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.targetCountry.name}`)
        .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
          })
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      

    return(
        <div className='Country-block'>
            <h1>{props.targetCountry.name}</h1>
            capital: {props.targetCountry.capital}
            <br/>
            population: {props.targetCountry.population}
            <h2>languajes</h2>
            <ul>
                {props.targetCountry.languages.map(
                    language => <li key={language.name}>{language.name}</li>
                )}
            </ul>
            <h2>Weather in {props.targetCountry.name}</h2>
            {Weather.current === undefined ? '' : <Weath Weather={Weather}/>}
        </div>
    )
}

export default Country;