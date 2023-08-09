import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contactsSlice';
import filterReducer from '../redux/filter/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
