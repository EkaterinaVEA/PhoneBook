import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactsAPI } from "../../services/contactsApi";
import { Notify } from "../../utils/notifications";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await ContactsAPI.register(credentials);

      Notify.success("You have successfully registered!");

      return data;
    } catch (error) {
      Notify.error(`Acount already exist!`);

      return rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await ContactsAPI.logIn(credentials);

      Notify.success(
        "Login successful!\n",
        `Welcome back, ${data.user.name}!`,
        5000
      );

      return data;
    } catch (error) {
      Notify.error("Incorrect email or password");
      return rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await ContactsAPI.logOut();

      Notify.info("You have been logged out!");
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;

    if (!token) return rejectWithValue();

    try {
      const user = await ContactsAPI.getCurrentUser(token);

      return user;
    } catch (error) {}
  }
);