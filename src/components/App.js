import React, { Component } from "react";
import Selector from "./Selector";
import "../css/App.css";
import { ResultsTable } from "./Map"

class App extends Component {
  state = {
    selection: "",
    results: []
  }
  // lifecycle method to fetch data from json file and render them in a filter
  componentDidMount() {
    fetch('./swiss-vote-results-sample.json')
    .then(function(response) {
      return response.json();
    })
    .then(results => this.setState({ results }))
    .catch(error => console.error('FetchError:', error));
  }

  handleChange = e => {
    const selection = this.state.results[e.target.value];
    this.setState({ selection });
  }

  // render the selection function to handle the onChange in the filter 
  render() {
    return (
      <div>
        <Selector {...this.state} onChange={this.handleChange} />
      <figure>
        <ResultsTable
        description={this.state.selection.description}
        results={this.state.selection.results}
        />
      </figure>
      </div>
      )
  }
}

export default App;
export { ResultsTable };
