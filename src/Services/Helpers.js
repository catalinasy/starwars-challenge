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
