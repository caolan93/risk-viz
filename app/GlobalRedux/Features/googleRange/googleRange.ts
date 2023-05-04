"use client";

import { paginationNext, paginationPrev } from "@/app/lib/googleSheets/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getTableDataJSON } from "@/app/lib/googleSheets/get";

export interface CounterState {
  value: string;
}

// First, create the thunk
export const getData = createAsyncThunk(
  "googleRange/getData",
  async (range?: string) => {
    const response = await getTableDataJSON(range);
    return response;
  }
);

export const googleRange = createSlice({
  name: "googleRange",
  initialState: { value: "A2:G11", tableData: [], loading: false },
  reducers: {
    increment: (state) => {
      state.value = paginationNext(state.value);
    },
    decrement: (state) => {
      state.value = paginationPrev(state.value);
    },
    sortTable: (state, action) => {
      state.tableData = action.payload;
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tableData = payload;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { increment, decrement, sortTable } = googleRange.actions;

export default googleRange.reducer;
