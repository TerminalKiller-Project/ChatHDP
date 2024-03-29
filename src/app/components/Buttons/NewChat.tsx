import React from 'react';
import s from './NewChat.module.css';

export const NewChat = () => {
  return (
    <button className={s.newChatButton}>
      <div className={s.plusIcon}>
        <svg color="white" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24"
          height="1em" width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
      <span>New chat</span>
      </button>
  )
}
