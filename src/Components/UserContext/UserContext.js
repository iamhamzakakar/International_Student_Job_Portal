import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const storedUser = localStorage.getItem('userData');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false); // Set loading to false after user is loaded/set
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};
