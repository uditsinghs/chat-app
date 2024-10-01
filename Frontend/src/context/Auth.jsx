/* eslint-disable react/prop-types */
// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))); 

  const storeDataInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const getUserData = async () => {
    if (!token) return;
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/users/loginuser", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data.userData);
      localStorage.setItem("user", JSON.stringify(data.userData)); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [token]);


  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ storeDataInLS, token, user,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
