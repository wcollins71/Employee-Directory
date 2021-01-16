import React from "react";
import Moment from "react-moment";
import "./index.css";

function Table(props) {
    return (
      <table className="tableEmployees table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => (
            <tr>
              <td>
                <img className="" src={result.picture.medium} alt="" />
              </td>
              <td>{result.name.first}</td>
              <td>{result.name.last}</td>
              <td className="email">
                <a href={"mailto:" + result.email}>{result.email}</a>
              </td>
              <td>
                <Moment format="DD/MM/YYYY">{result.dob.date}</Moment>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }


export default Table;
