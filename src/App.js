import "./App.css";
import React, { Component } from "react"
import Banner from "./components/banner/index";
import Searchbar from "./components/searchbar/index";
import Table from "./components/table/index";



function App() {
  return (
    <div className="App">
      <Banner />
      <Searchbar />
      <Table />
    </div>
  );
}

export default App;
