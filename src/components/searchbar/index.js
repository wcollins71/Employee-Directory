import React, { Component } from "react";
import "./index.css";

class Searchbar extends Component {
  state = {
    searchTerm: "",
  };

  render() {
    return (
      <div className="searchbox">
        <form className="form">
          <input
            value={this.state.searchTerm}
            name="searchTerm"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />

          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
