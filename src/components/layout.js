import React from 'react';
import {
  container
} from '@styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={container}>
      {children}
    </div>
  );
}

export default Layout;