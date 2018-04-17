import React from 'react';

const CountryListItem = ({country, onCountrySelect}) => {
    
    const imgUrl = country.flag;
    const title = country.name;

    return (
        <li onClick={() => onCountrySelect(country)} className="list-group-item">
            <div className="country-item media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} alt={title}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CountryListItem;
