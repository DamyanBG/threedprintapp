import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (!user.token) {
            return;
        }

        localStorage.setItem("userInfo", JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        const localStorageUser = JSON.parse(localStorage.getItem("userInfo"))
        if (localStorageUser) setUser(localStorageUser);
    }, []);

    const logOut = () => {
        setUser({})
        localStorage.removeItem("userInfo")
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser: (obj) => setUser(obj),
                logOut
            }}
        >
            {children}
        </UserContext.Provider>
    );
};