import { createSlice } from "@reduxjs/toolkit";
import { fetchQuote } from "./thunks";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: false,
  data: {
    quote: "",
    author: "",
  },
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setQuote(state, action) {
      state.data.quote = action.payload;
    },
    setAuthor(state, action) {
      state.data.author = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.pending, (state) => {
      toast.loading("Obteniendo la cita");
      state.loading = true;
    });
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      toast.dismiss();
      toast.success("Cita obtenida exitosamente");
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchQuote.rejected, (state) => {
      toast.dismiss();
      toast.error("Error en obtener la cita");
      state.loading = false;
      state.error = true;
    });
  },
});

export const { setData, setQuote, setAuthor } = quoteSlice.actions;
export default quoteSlice.reducer;
