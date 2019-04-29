const baseURL = "http://swapi.co/api/";

export async function apiCall(param) {
  const data = await fetch(baseURL + param);
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
