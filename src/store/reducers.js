import { combineReducers } from 'redux';
import types from './types';

const chats = (state = [], { type, chat }) => {
  switch(type) {
    case types.ADD_CHAT:
      return [...state, chat];
    default:
      return state;
  }
}

export default combineReducers({
  chats,
})