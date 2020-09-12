import types from './types';

export const addChat = (chat) => ({
  type: types.ADD_CHAT,
  chat
});