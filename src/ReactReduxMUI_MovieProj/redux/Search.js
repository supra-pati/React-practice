import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  totalResults: 0,
  page: 0,
  totalPages: 0,
  isFetching: false,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    searchMovies: (state) => {
      return {
        ...state,
        isFetchin: true,
      };
    },
    fetchedSearchMovies: (state, action) => {
      return {
        ...state,
        isFetching: true,
        results: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
      };
    },
    resetSate: (state) => {
      return initialState;
    },
  },
});

export const { searchMovies, fetchedSearchMovies, resetSate } =
  searchSlice.actions;

export default searchSlice.reducer;
