import {createContext, useContext, useState} from "react"

//Creating context
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    //Login - logout
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true)
    const logout = () => setIsLoggedIn(false)

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            isLoggedIn
        }} >
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line
export const useAuth = () => useContext(AuthContext)

