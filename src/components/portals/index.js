import React from 'react';
import ReactDOM from 'react-dom';

import MusicComponent from './Music';
import ChatComponent from './Chat';

export const MusicPortal = ReactDOM.createPortal(
  <MusicComponent />,
  document.getElementById('music')
);

export const ChatPortal = ReactDOM.createPortal(
  <ChatComponent />,
  document.getElementById('chat')
);
