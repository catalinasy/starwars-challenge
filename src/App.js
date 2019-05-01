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
    if (!getLocalStorage("starwars-characters")) {
      const characters = await getCharactersFromAPI();
      setLocalStorage("starwars-characters", characters);
    }
    this.setState({ data: getLocalStorage("starwars-characters") });
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
