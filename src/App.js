import React from "react";
import "./style.css";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducers';

import Rooms from './components/Rooms';
import Chats from './components/Chats';
import ChatBox from './components/ChatBox';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store} >
      <div className="app-root">
        <div className="app-left">
          <Rooms />
        </div>
        <div className="app-right">
          <Chats />
          <ChatBox />
        </div>
      </div>
    </Provider>
  );
}
