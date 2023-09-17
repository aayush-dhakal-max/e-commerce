import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  image: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      //   console.log(action.payload);
      const { _id, firstname, lastname, email, image } = action.payload;
      Object.assign(state, { id: _id, firstname, lastname, email, image });
    },
    logoutRedux: (state, action) => {
      for (let key in state) {
        if (state.hasOwnProperty(key)) {
          state[key] = "";
        }
      }
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
