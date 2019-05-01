import React, { Component } from "react";
import { Button } from "./Button";

export default class SearchBar extends Component {
  state = {
    character: null
  };
  handleCharacterChange(event) {
    const character = event.target.value.trim();
    if (character) {
      this.setState({ character });
    }
  }
  handleSearch() {
    const { character } = this.state;
    character && this.props.handleSearch(character);
  }
  render() {
    return (
      <div className="searchBar">
        <input
          type="text"
          onChange={event => this.handleCharacterChange(event)}
        />
        <Button
          className="button"
          label="Search"
          onClick={() => this.handleSearch()}
        />
      </div>
    );
  }
}