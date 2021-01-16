import React from "react";
import Moment from 'react-moment';
// import "./style.css";

function TableData(props) {
  return (
    <div>
      {props.results.map((result) => (
        <tr>
          <td>
            <img
              className=""
              src={result.picture.medium}
              alt=""
            />
          </td>
          <td>{result.name.first}</td>
          <td>{result.name.last}</td>
          <td>{result.email}</td>
          <td><Moment format="DD/MM/YYYY">{result.dob.date}</Moment></td>
        </tr>
      ))}
      ;
    </div>
  );
}

export default TableData;
