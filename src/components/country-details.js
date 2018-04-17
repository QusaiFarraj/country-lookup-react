import React from 'react';
import MyMap from './map';

const CountryDetail = ({country, error}) => {

    if (error) {
        return <div>No country were found with this search. Error Msg: {error.errorCode}</div>
    }

    if (!country) {
        return <div>Please select country to display</div>
    }

    const title = country.name;
    const capital = country.capital;
    const flag = country.flag;
    const region = country.region;
    const subregion = country.subregion;
    const area = country.area;
    const nativeName = country.nativeName;
    const alpha2Code = country.alpha2Code;
    const alpha3Code = country.alpha3Code;
    const currencies = country.currencies;
    const lat = country.latlng[0];
    const lng = country.latlng[1];
    const population = country.population;
    const languages = country.languages;


    return (
        <div className="country-details col-md-8 container">
            <div className="img-fluid center">
                <img src={flag} alt={flag} />
            </div>
            <hr />
            <div className="col-md-6">
                <div>Name: {title}</div>
                <div>Capital: {capital}</div>
                <div>Region: {region}</div>
                <div>Subregion: {subregion}</div>
                <div>Area: {area}</div>
                <div>Population: {population}</div>
                <div>languages:
                    <ul>
                        {languages.map((lang)=>{ return (<li key={lang.name}>{lang.name}<ul><li key={lang.iso639_1}>ISO639_1: {lang.iso639_1}</li><li key={lang.iso639_2}>ISO639_2: {lang.iso639_2}</li><li>Name: {lang.name}</li><li key={lang.nativeName}>Native Name: {lang.nativeName}</li></ul></li>);})}
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <div>Native Name: {nativeName}</div>
                <div>Alpha2 Code: {alpha2Code}</div>
                <div>Alpha3 Code: {alpha3Code}</div>
                <div>Currencies:
                    <ul>
                        {currencies.map((curr)=>{ return (<li key={curr.code}>{curr.name}<ul><li key={curr.code}>Code: {curr.code}</li><li key={curr.name}> Name: {curr.name}</li><li key={curr.symbol}> Symbol: {curr.symbol}</li></ul></li>);})}
                    </ul>
                </div>
            </div>
            <div className="col-md-12 map">
                <MyMap lat={lat} lng={lng}/>
            </div>
        </div>
    );
};

export default CountryDetail;
