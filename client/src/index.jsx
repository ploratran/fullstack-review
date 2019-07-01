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
    this.handleOnSearch = this.handleOnSearch.bind(this);
  }


  handleOnSearch (term) {
    var _this=this;
    console.log(`${term} was searched`);
    var newTerm = {user: term};
    $.ajax({
      method: 'POST',
      url: 'http://localhost:1128/repos',
      data: JSON.stringify(newTerm),
      contentType: 'application/json',
      success: () => {
        console.log("success");
        console.log('print this: ', newTerm);
        $.ajax({
          method: 'GET',
          url: 'http://localhost:1128/repos?userid='+newTerm.user,
          contentType: 'json',
          success: (data) => {
            console.log(data);
            _this.setState({
              repos: data
            })
          },
          error: () => {
            console.log("err GET req");
          }
        })
      },
      error: () => {
        console.log("error POST req");
      }
    });
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search handleOnSearch={this.handleOnSearch}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));