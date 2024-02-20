import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getGreetingMessage = createAsyncThunk('greetings/getGreetingMessage', async () => {
  const result = await axios.get('http://localhost:3000/random_greeting');
  return result.data;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: { value: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreetingMessage.fulfilled, (state, action) => {
        if (action.payload && action.payload.greeting) {
          state.value = action.payload.greeting;
        } else {
          console.error('Invalid payload structure:', action.payload);
        }
      });
  },
});

export default greetingSlice.reducer;
export { getGreetingMessage };
