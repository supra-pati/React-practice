import { useSelector } from "react-redux";
import Suggestion from "../m-components/Suggestion";

const SearchMoviesSuggestion = () => {
  const { search } = useSelector((Store) => Store);
  // console.log(search.isFetching);
  return <Suggestion movies={search}></Suggestion>;
};
export default SearchMoviesSuggestion;
