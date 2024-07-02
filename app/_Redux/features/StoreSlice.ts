import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currentUser = createSlice({
  name: "currentUser",
  initialState: {
    isLoggin: false,
    newuser: {
      NewFirstName: "Abdallh",
      NewLastName: "Rakha",
      NewPhone: "01091415560",
      NewEmail: "Abdallhsabry194@gmail.com",
      NewCountry: "Egypt",
      NewPassword: "0",
    },
    BookCart: [],
    FavBooks: [],
    userNameFromStore: "Abdallh",
    PassWordFromStore: "1234",
  },
  reducers: {
    ActiveLoggin: (state) => {
      state.isLoggin = true;
    },
    AddBookToCard: (state, action) => {
      let exist = false;

      state.BookCart.forEach((e) => {
        if (e.id === action.payload.id) {
          e.qty++;
          exist = true;
        }
      });
      if (!exist) {
        state.BookCart.push(action.payload);
      }
    },
    DeleteBookFromCard: (state, action) => {
      state.BookCart = state.BookCart.filter((e) => e.id !== action.payload);
    },
    AddFavBook: (state, action) => {
      let isexist = false;
      state.FavBooks.forEach((e) => {
        if (e.id === action.payload.id) {
          isexist = true;
        }
      });
      if (!isexist) {
        state.FavBooks.push(action.payload);
      }
    },
    ActiveLogout: (state) => {
      state.isLoggin = false;
      while (state.BookCart.length > 0) {
        state.BookCart.shift();
      }
      while (state.FavBooks.length > 0) {
        state.FavBooks.shift();
      }
    },
    AddNewUser: (state, action) => {
      state.newuser = action.payload;
    },
  },
});

export const {
  ActiveLoggin,
  AddBookToCard,
  AddFavBook,
  DeleteBookFromCard,
  AddNewUser,
  ActiveLogout,
} = currentUser.actions;
export default currentUser.reducer;
