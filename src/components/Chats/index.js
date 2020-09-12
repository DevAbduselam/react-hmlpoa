import React from 'react';

import { connect } from 'react-redux';

import './style.css';

function Chats({ chats }) {
  return (
    <div className="chats-root">
      <div className="humberger-menu">
        <div>__</div>
        <div>__</div>
        <div>__</div>
      </div>
      <div>
        {chats.map(({ name, text }) => (
          <div>
            <div>{name}: {text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = ({ chats }) => ({ chats });

export default connect(mapStateToProps)(Chats);