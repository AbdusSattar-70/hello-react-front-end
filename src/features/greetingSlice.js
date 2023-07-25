import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios

const initialState = {
  greetings: null,
  loading: false,
  error: null,
};

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/greetings');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch greetings.');
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greetings = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
