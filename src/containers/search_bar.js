import React, {Component} from 'react';

export default class SearchBar extends Component {
    state = {
      term: ''
    };

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({
            term: ''
        })
    };

    render() {
        return (
            <form className="input-group"
                  onSubmit={this.onSubmitHandler}>
                <input
                    className="form-control"
                    placeholder="Get a 5 day forecast in your favorite cities" value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}