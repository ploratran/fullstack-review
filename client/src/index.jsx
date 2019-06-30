//MODEL OF CLIENT
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
  }

  //do GET and POST request here in order to get data from server
  //the data (github repos) will be the search term
  search (term) {
    console.log(`${term} was searched`);
    var newTerm = {user: term};
    // TODO
    $.ajax({
      method: 'POST',
      url: 'http://localhost:1128/repos',
      // url: 'http://127.0.0.1:1128/repos',
      data: JSON.stringify(newTerm),
      contentType: 'application/json',

      success: () => {
        console.log("success");
      },
      error: () => {
        console.log("error");
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search handleOnSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));