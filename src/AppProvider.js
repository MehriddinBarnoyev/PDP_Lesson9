import React, { createContext, useReducer } from 'react';

// Context ni yaratish
export const AppContext = createContext();

// reducer ni yaratish
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

// AppProvider komponentini yaratish
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { darkMode: false });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
