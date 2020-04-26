import React from "react";

const placeholderImg =
  "https://mentalitch.com/wp-content/uploads/2020/01/5-Most-Incredible-Films-Ever-How-to-Find-the-Interesting-Film-to-See.jpg";

export type MovieType = {
  Poster: string;
  Title: string;
  Year: string;
};

export type Props = {
  movie: MovieType;
};

export const Movie = ({ movie }: Props) => {
  const poster = movie.Poster === "N/A" ? placeholderImg : movie.Poster;
  return (
    <>
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </>
  );
};
