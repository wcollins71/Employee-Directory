import React, { Component } from "react";
import "./index.css";

class Searchbar extends Component {
  state = {
    searchTerm: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="searchbox">
        <p>
          Search term {this.state.searchTerm}
        </p>
        <form>
          <input
            className="form-control"
            value={this.state.searchTerm}
            name="searchTerm"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
