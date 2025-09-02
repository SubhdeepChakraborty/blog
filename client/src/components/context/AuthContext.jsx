import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("accessToken"))
  );
  const [acessToken, setAcesstoken] = useState(
    () => localStorage.getItem("accessToken") || null
  );
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setIsLoggedIn(Boolean(acessToken));
  }, [acessToken]);

  const login = (payload) => {
    console.log(payload);

    const { userId, username, accessToken } = payload[0];

    setIsLoggedIn(true);
    setUser({ userId, username });
    setAcesstoken(accessToken);
    setLoader(true)

    console.log(user, accessToken, isLoggedIn, "data on state")

    // Save to localStorage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify({ userId, username }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setAcesstoken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, user, acessToken, isLoggedIn, loader, setLoader }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
