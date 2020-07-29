import React from 'react';
import '../css/SearchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    componentDidMount() {
        const input = document.getElementById("search-input");
        const searchBtn = document.getElementById("search-btn");

        const expand = () => {
            searchBtn.classList.toggle("close");
            input.classList.toggle("square");
        };

        searchBtn.addEventListener("click", expand);

    }

    render() {
        return (
            <form id="content" onSubmit={this.onFormSubmit}>
                <input type="text" name="input" 
                    className="input" id="search-input"
                    onChange={(event) => {this.setState({term: event.target.value})}}></input>
                <button type="reset" className="search" id="search-btn"></button>
            </form> 
        );
    }
}

export default SearchBar;