import React from 'react';
import { connect } from 'react-redux';

import { addChat } from '../../store/actions';

import './style.css';

function ChatBox({ dispatch }) {
  return (
    <div className="chatbox-root">
      <input
        className="chatbox-input"
        onKeyDown={(a) => {
          if (a.keyCode === 13 && a.target.value) {
            dispatch(addChat({name: 'Baysa', text: a.target.value}));
            a.target.value = '';
          }
        }}
        placeholder="Say hi" />
    </div>
  )
}

export default connect()(ChatBox);