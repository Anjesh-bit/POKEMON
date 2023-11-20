// Combine reducers for multiple state slices
import { combineReducers } from "redux";
import modalSlice from "../slices/ModalSlice";
import teamsSlice from "../slices/CreateTeamsSlice";

export const rootReducer = combineReducers({
  modal: modalSlice,
  teams: teamsSlice,
});
