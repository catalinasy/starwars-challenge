import React, { Component } from "react";
import "./App.css";
import { List } from "./Components/List";
import SearchBar from "./Components/SearchBar";
import { NotFound } from "./Components/NotFound";
import { Loading } from "./Components/Loading/Loading";
import {
  getLocalStorage,
  getCharactersFromAPI,
  setLocalStorage,
  getFilmsByCharacter,
  verifyCachedFilmsByCharacter
} from "./Services/helpers";


export default class App extends Component {
  state = {
    data: null,
    films: null,
    error: null,
    loading: false
  };

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
        <List/>
      </div>
    );
  }
}
