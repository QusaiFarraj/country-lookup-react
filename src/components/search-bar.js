import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            term: '',
            lookupBy: null,
        }; // holds search terms..

        this.handleInputChange = this.handleInputChange.bind(this);
        this.lookupCountry = this.lookupCountry.bind(this);
    }

    handleInputChange(e) {
        const target = e.target; // we get the target element
        const value = target.value;
        const name = target.name;

        this.setState({ // set value for each key in state
          [name]: value
        });
    }

    lookupCountry(e){

        const term = this.state.term;
        const lookupBy = this.state.lookupBy;
        
        const query = `?${lookupBy}=${term}`;
console.log(query);
        this.props.onSearchButtonClicked(query);
    }

    render() {
        return (
            <div className="search-bar">
                <div>
                    <input
                        name="term"
                        value={this.state.term}
                        onChange={this.handleInputChange} />
                    <br/>
                    <div>
                    <div className="radio">
                        <label>
                            <input
                                name="lookupBy"
                                value="name"
                                type="radio"
                                checked={this.state.lookupBy === 'name'}
                                onChange={this.handleInputChange} />
                            By Name
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                name="lookupBy"
                                value="fullname"
                                type="radio"
                                checked={this.state.lookupBy === 'fullname'}
                                onChange={this.handleInputChange} />
                            By Fullname
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                name="lookupBy"
                                value="code"
                                type="radio"
                                checked={this.state.lookupBy === 'code'}
                                onChange={this.handleInputChange} />
                            By Code
                        </label>
                    </div>
                    </div>
                    <div className="search-button">
                        <button className="btn btn-info" type="submit" onClick={this.lookupCountry}>Seach</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
