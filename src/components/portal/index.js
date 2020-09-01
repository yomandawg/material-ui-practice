import React from 'react';
import ReactDOM from 'react-dom';

import ChatComponent from './Chat';

export const ChatPortal = ReactDOM.createPortal(
  <ChatComponent />,
  document.getElementById('chat')
);
