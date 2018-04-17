import React from 'react';
import CountryListItems from './country-list-item';

const CountryList = (props) => {
    console.log(props.countries.length > 1);
    let display=null;
    if (!(props.countries.length > 1)) {
        display = {display: 'none'};
        return false;
    }
    const countryList = props.countries.map((country) => {
        return <CountryListItems 
            key={country.numericCode} 
            country={country} 
            onCountrySelect={props.onCountrySelect} />
    });

    return (
        <ul className="col-md-4 list-group" style={display}>
            {countryList}
        </ul>
    );
};

export default CountryList;