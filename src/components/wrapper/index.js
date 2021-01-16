// import "./App.css";
import React, { Component } from "react";
import Banner from "../banner/index";
import Searchbar from "../searchbar/index";
import Table from "../table/index";
import Api from "../../utils/api";

class Wrapper extends Component {
  state = {
    results: [],
    filteredEmployees: []
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const employees = this.state.results;
    const searchTerm = event.target.value;
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );

    // Updating the input's state
    this.setState({
      filteredEmployees,
    });
  };

  componentDidMount() {
    Api.getUsers()
      .then((res) =>
        this.setState({
          results: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="Wrapper">
        <Banner />
        <Searchbar  employee={this.state.employees}
                    handleInputChange={this.handleInputChange} />
        <Table results={this.state.filteredEmployees} />
      </div>
    );
  }
}

export default Wrapper;
