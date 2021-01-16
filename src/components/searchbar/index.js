import React from "react";
import "./index.css";

function Searchbar(props) {


    return (
      <div className="searchbox">
        <form>
          <input
            className="form-control"
            value={props.value}
            name="searchTerm"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );

}

export default Searchbar;
