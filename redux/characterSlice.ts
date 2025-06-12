import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Character, CharacterApiResponse } from "./characterTypes";

export const fetchCharacters = createAsyncThunk<
  CharacterApiResponse,
  string,
  { rejectValue: string }
>("characters/fetchCharacters", async (query, thunkAPI) => {
  try {
    const response = await axios.get<CharacterApiResponse>(
      `https://rickandmortyapi.com/api/character/?${query}`
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return thunkAPI.rejectWithValue("No characters found");
    }
    console.error("API error:", error);
    return thunkAPI.rejectWithValue("Characters could not be loaded");
  }
});

type CharacterState = {
  characters: Character[];
  info: CharacterApiResponse["info"];
  loading: boolean;
  error: string | null;
};

const initialState: CharacterState = {
  characters: [],
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  loading: false,
  error: null,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.results;
        state.info = action.payload.info;
        state.loading = false;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default characterSlice.reducer;
