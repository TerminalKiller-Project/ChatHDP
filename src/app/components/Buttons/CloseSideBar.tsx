import React from 'react';
import s from './CloseSideBar.module.css';

export const CloseSideBar = () => {
  return (
    <button className={s.closeSideBar}>
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
    </button>
  )
}
