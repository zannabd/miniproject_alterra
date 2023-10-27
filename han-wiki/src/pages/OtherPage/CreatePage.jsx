/* eslint-disable react/prop-types */

import AddMovieForm from "../../components/CreateMovie";
import ListMovie from "../../components/CreateMovie/ListMovie";

export default function CreatePage(props) {
  const { movies, setMovies } = props;

  const addMovieToList = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <>
      <AddMovieForm onAddMovie={addMovieToList} />
      <ListMovie movies={movies} setMovies={setMovies} />
    </>
  );
}
