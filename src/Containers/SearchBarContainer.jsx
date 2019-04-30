import React, { Component } from "react";
import SearchBar from "../Components/SearchBar";


export default class SearchBarContainer extends Component {
  handleSearch(character) {
    console.log(character);
  }
  render() {
    return (
      <div>
        <SearchBar handleSearch={character => this.handleSearch(character)} />
      </div>
    );
  }
}
