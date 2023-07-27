import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface CustomerState {
  value: Customer[];
}

const initialStateValue: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState: initialStateValue,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
