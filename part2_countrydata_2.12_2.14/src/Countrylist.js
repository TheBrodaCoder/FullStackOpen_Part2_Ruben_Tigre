import React from 'react';
import CountryLine from './CountryLine';

const Countrylist = ({handleClick, searchedCountry, isSearching}) => {

    let mappedCountries = searchedCountry.map(
        country => <CountryLine key={country.alpha3Code} handleClick={handleClick} name={country.name} id={country.alpha3Code}/>
    )

    return (
        <table>
            <tbody>
                {isSearching ? mappedCountries : (<tr><td></td></tr>)}
            </tbody>
        </table>
    )
}

export default Countrylist;