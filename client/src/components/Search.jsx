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
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.handleOnSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.handleOnChange}/>
      <button onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;