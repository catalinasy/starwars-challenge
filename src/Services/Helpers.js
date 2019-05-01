export async function apiCall(URL) {
  const data = await fetch(URL);
  const json = await data.json();
  return json;
}
export function formatCharacters(characters) {
  return characters.map((character, index) => {
    return {
      id: index,
      name: character.name,
      films: character.films
    };
  });
}
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export async function getCharactersFromAPI() {
  const data = await apiCall("http://swapi.co/api/people");
  const rawCharacters = data.results;
  return formatCharacters(rawCharacters);
}
export function getFilmsByCharacter(character) {
  return Promise.all(
    character.films.map(f => {
      return apiCall(f);
    })
  );
}
export function verifyCachedFilmsByCharacter(character) {
  return getLocalStorage(`starwars-films-${character.id}`);
}
