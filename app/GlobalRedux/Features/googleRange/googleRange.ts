"use client";
import { paginationNext, paginationPrev } from "@/app/lib/googleSheets/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTableDataJSON } from "@/app/lib/googleSheets/get";

export interface GoogleRangeState {
  value: string;
  tableData: any[];
  loading: boolean;
}

const initialState: GoogleRangeState = {
  value: "A2:G11",
  tableData: [],
  loading: false,
};

// First, create the thunk
export const getData = createAsyncThunk(
  "googleRange/getData",
  async (range?: string) => {
    const response = await getTableDataJSON(range);
    return response;
  }
);

export const googleRangeSlice = createSlice({
  name: "googleRange",
  initialState,
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
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.tableData = payload;
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { increment, decrement, sortTable } = googleRangeSlice.actions;

export default googleRangeSlice.reducer;
