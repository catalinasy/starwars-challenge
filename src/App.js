import React, { Component } from "react";
import "./App.css";
import SearchBarContainer from "./Containers/SearchBarContainer";
import { apiCall, formatCharacters } from "./Services/Helpers";

export default class App extends Component {
  async componentDidMount() {
    if (localStorage.getItem("starwars-data") === null) {
      const data = await apiCall("people");
      const rawCharacters = data.results;
      const formattedCharacters = formatCharacters(rawCharacters);
      localStorage.setItem(
        "starwars-data",
        JSON.stringify(formattedCharacters)
      );
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
      </div>
    );
  }
}
