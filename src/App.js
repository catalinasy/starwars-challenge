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
    loading: false,
    foundCharacter: null,
  };
  
  async componentDidMount() {
    if (!getLocalStorage("starwars-characters")) {
      const characters = await getCharactersFromAPI();
      setLocalStorage("starwars-characters", characters);
    }
    this.setState({ data: getLocalStorage("starwars-characters") });
  }
  async handleSearch(name) {
    const { data } = this.state;
    const character = data.find(c =>
      c.name.toLowerCase().includes(name.toLowerCase())
    
    );
    if (character) {
      this.setState({ loading: true });
      const cachedFilms = verifyCachedFilmsByCharacter(character);
      const films = cachedFilms || (await getFilmsByCharacter(character));
      this.setState({foundCharacter: character.name})
      
      // caches films by characterID if they don't exist in localStorage
      !cachedFilms && setLocalStorage(`starwars-films-${character.id}`, films);
      this.setState({ films, error: false, loading: false});
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const { loading, error, films, foundCharacter} = this.state;
    return (
      <div className="App">
        <SearchBar handleSearch={name => this.handleSearch(name)} />
        {loading ? <Loading /> : error ? <NotFound /> : <List films={films} foundCharacter={foundCharacter}/>}
      </div>
    );
  }
}
