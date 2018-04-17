import React, {Component} from 'react';
import SearchBar from './search-bar';
import CountryDetails from './country-details';
import CountryList from './country-list';
import axios from 'axios';
import '../styles/style.css';

const URL = 'http://dev.lookupCountry.com';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            countries: [],
            selectedCountry: null,
            error: null
        }; // holds country info

        this.lookupCountry();
    }

    lookupCountry(lookup){
        
        let url = '/all';
        if (lookup) {
            url = `/lookup${lookup}`;
        }
        
        url = `${URL}${url}`;

        console.log(url);

        axios.get(url)
          .then((response) => {
            console.log(response.data);
            let data = response.data.length > 0 ? response.data[0] : response.data;
            this.setState({
                countries: response.data,
                selectedCountry: data,
                error: null
            });
          })
          .catch((error) => {
            console.log('error in axios');
            this.setState({
                countries: [],
                selectedCountry: null,
                error: error
            });
            console.log(error);
          }
        );
    }

    render() {
        return (
            <div className="main">
                <SearchBar onSearchButtonClicked={(lookup) => {this.lookupCountry(lookup)}} />
                <CountryDetails error={this.state.error} country={this.state.selectedCountry} />
                <CountryList 
                    onCountrySelect={selectedCountry => this.setState({selectedCountry})} 
                    countries={this.state.countries} />

                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHUDmXXqnM4M6tZ76q8PrIg-Ufil8_z9I&callback=myMap"></script>
            </div>
        );
    }
}

export default Main;
