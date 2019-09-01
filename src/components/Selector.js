import React from "react";
import {render} from 'react-dom'
import Downshift from 'downshift'

function Selector(props) {
  return (
    <select onChange={props.onChange} defaultValue={props.selection}>
      {/* empty option as default selected */}
      <option disabled></option>
      {props.results.map((result, i) => {
        return (
          <option value={i} key={i}>
            {result.description.en}
          </option>
        );
      })}
    </select>
  );
}

export default Selector;