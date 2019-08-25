import React, { Component } from "react";

// function to create a table component

function ResultsTable(props) {
    return (
      <table>
        {props.description && <caption>{props.description.en}</caption>}
        <thead>
          <tr>
            <th>Canton</th>
            <th>Yes</th>
            <th>No</th>
          </tr>
        </thead>
        <tbody>
          {props.results &&
            props.results.map(result => {
              return (
                <tr key={result.canton}>
                  <td>{result.canton}</td>
                  <td>{result.yes}</td>
                  <td>{result.no}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }

  export { ResultsTable };