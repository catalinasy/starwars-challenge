import React from "react";

export const List = props => {
  const {films, foundCharacter} = props;
  return (
    <div className="container"> 
    <p className="characterName">{foundCharacter}</p>
    <ul>
      {films &&
        films.map((film, i) => {
          return (
            <article key={i}>
              <p>Title: {film.title}</p>
              <p>Directed by: {film.director}</p>
            </article>
          );
        })}
    </ul>
    </div>
  );
};
