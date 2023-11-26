import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    // Check if the user was authenticated before the page reload
    () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );
 const login = () => {
   setIsAuthenticated(true);
   localStorage.setItem('isAuthenticated', JSON.stringify(true));
 };

 const logout = () => {
   setIsAuthenticated(false);
   localStorage.removeItem('isAuthenticated');
 };

 return (
   <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
     {children}
   </AuthContext.Provider>
 );
};
