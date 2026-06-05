import { createContext, useEffect, useState, useContext } from "react";

import { API_URL } from "../config";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvaider({ children }) {
  const [isUser, setIsUser] = useState(() => {
    const savedUser = localStorage.getItem("userLogin");

    return savedUser ? JSON.parse(savedUser) : false;
  });

  const [UserData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem("userData");

    return savedUser ? JSON.parse(savedUser) : false;
  });

  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isUser", JSON.stringify(isUser));

    localStorage.setItem("userData", JSON.stringify(UserData));
  }, [isUser, UserData]);

  async function handleLogin(e) {
    e.preventDefault();

    setErrorMsg("");

    const currentData = {
      firstname: e.target.firstname.value,

      password: e.target.password.value,
    };

    const response = await fetch(
      `${API_URL}/users?firstname=${currentData.firstname}&password=${currentData.password}`,
    );

    const data = await response.json();

    if (data.length > 0) {
      localStorage.setItem("userLogin", "true");

      setIsUser(true);

      navigate("/UserPage");

      const loggedInUser = data[0];

      setUserData(loggedInUser);

      localStorage.setItem("userLogin", JSON.stringify(loggedInUser));
    } else {
      setErrorMsg("მომხმარებელი ვერ მოიძებნა ან პაროლი არასწორია!");
    }
  }

  function handleLogOut() {
    localStorage.removeItem("userLogin");

    setIsUser(false);

    navigate(navigate.back());
  }

  return (
    <AuthContext.Provider
      value={{
        isUser,
        setIsUser,
        setIsUser,
        UserData,
        handleLogOut,
        handleLogin,
        errorMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useUser() {
  return useContext(AuthContext);
}
