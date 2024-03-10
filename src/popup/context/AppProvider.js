import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <AppContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
