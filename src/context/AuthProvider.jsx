import React, {createContext, useState} from 'react';
import useLocalStorage from "../hooks/use-local-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [_, setCurrentProfile] = useLocalStorage({
        key: 'currentProfile',
        defaultValue: null,
    })

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
        setCurrentProfile(null)
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
