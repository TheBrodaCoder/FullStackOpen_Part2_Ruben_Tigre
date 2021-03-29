import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import Countrylist from './Countrylist';
import axios from 'axios';
import Country from './Country';

function App() {

  const [filter, setFilter] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [targetCountry, setTargetCountry] = useState({});
  const [renderCountry, setRenderCountry] = useState(false);

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountryData(response.data)
    })
  }, [])

  const handleKeyUp = (evt) => {
    let searchedCountries = countryData.filter(country => country.name.match(new RegExp(filter, 'i')));
    setSearchedCountry(searchedCountries);
    if (searchedCountries.length === 1) {
      setTargetCountry(searchedCountries[0])
      setRenderCountry(true);
    } else {
      setSearchedCountry(searchedCountries);
      setRenderCountry(false);
    }
  }

  const handleFilter = (evt) => {
    evt.preventDefault();
    setFilter(evt.target.value);
    if (evt.target.value === '') {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  }

  const handleClick = (evt) => {
    evt.preventDefault();
    let searched = countryData.filter(
      country => country.alpha3Code === evt.target.name
    )
    setTargetCountry(searched[0]);
    setRenderCountry(true);
  }

  return (
    
    <div className="App">
      <h1>Search a country!</h1>
      <Filter handleKeyUp={handleKeyUp} handleFilter={handleFilter} filter={filter}/>
      {
        !renderCountry ?
        (<Countrylist handleClick={handleClick} searchedCountry={searchedCountry} isSearching={isSearching}/>)      
        :
        (<Country targetCountry={targetCountry}/>)
         
      }
    </div>
  );
}

export default App;
