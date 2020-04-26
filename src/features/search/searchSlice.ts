import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { MovieType } from "./Movie";

interface SearchState {
  loading: boolean;
  films: MovieType[];
  errorMessage: string | null;
}

const initialState: SearchState = {
  loading: false,
  films: [],
  errorMessage: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    filmsLoading: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = true;
      state.errorMessage = null;
    },
    filmsSuccess: (state, action: PayloadAction<MovieType[]>) => {
      state.loading = false;
      state.films = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    filmsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { filmsLoading, filmsSuccess, filmsFailure } = searchSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchFilms = (searchValue: string): AppThunk => async (
  dispatch
) => {
  dispatch(filmsLoading());
  const response = await fetch(
    `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`
  );
  const data = await response.json();
  if (data.Response === "True") {
    dispatch(filmsSuccess(data.Search));
  } else {
    dispatch(filmsFailure(data.Error));
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFilms = (state: RootState) => state.search.films;
export const selectErrorMessage = (state: RootState) =>
  state.search.errorMessage;
export const selectLoadingStatus = (state: RootState) => state.search.loading;

export default searchSlice.reducer;
