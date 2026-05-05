import { createSlice } from "@reduxjs/toolkit";

const aiSearchSlice = createSlice({
  name: "aiSearch",
  initialState: {
    aiSearchView: false,
    movieNames: null,
    movieResults: null,
    isLoading: false,
    
  },
  reducers: {
    toggleAiSearchView: (state) => {
      state.aiSearchView = !state.aiSearchView;
    },
    addAiMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    setAiSearchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleAiSearchView, addAiMovieResult, setAiSearchLoading } =
  aiSearchSlice.actions;
export default aiSearchSlice.reducer;