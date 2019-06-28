import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleOnChange (e) {
    console.log('user input term: ', e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  search() {
    console.log('add button clicked: ', this.state.term);
    this.props.handleOnSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.handleOnChange}/>
      <button onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;