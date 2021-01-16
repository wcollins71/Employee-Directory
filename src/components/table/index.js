import React, { Component } from "react";
import Api from "../../utils/api";
import TableData from "./tableData";
import Moment from "react-moment";

class Table extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    Api.getUsers()
      .then((res) =>
        this.setState({
          results: res.data.results,
          // filteredEmployees: res.data.results
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
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
          {/* <TableData results={this.state.results} /> */}
          {this.state.results.map((result) => (
            <tr>
              <td>
                <img className="" src={result.picture.medium} alt="" />
              </td>
              <td>{result.name.first}</td>
              <td>{result.name.last}</td>
              <td>{result.email}</td>
              <td>
                <Moment format="DD/MM/YYYY">{result.dob.date}</Moment>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
