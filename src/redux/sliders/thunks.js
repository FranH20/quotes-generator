import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
  "quote/fetchQuote",
  async (fetchQuote, _) => {
    const data = await fetchQuote;
    return data;
  }
);
