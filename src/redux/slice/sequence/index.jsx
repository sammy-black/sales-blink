import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sequenceForm: {
    name: "",
  },
};

const sequenceSlice = createSlice({
  name: "sequence",
  initialState,
  reducers: {
    setSequenceForm: (state, { payload }) => {
      state.sequenceForm = { ...state.sequenceForm, ...payload };
    },
  },
});

export default sequenceSlice.reducer;

export const { setSequenceForm } = sequenceSlice.actions;
