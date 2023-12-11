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
  reducers: {},
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

export const { setQuote, setLoading, setError } = quoteSlice.actions;
export default quoteSlice.reducer;
