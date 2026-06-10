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
    localStorage.setItem("userLogin", JSON.stringify(isUser));
    localStorage.setItem("userData", JSON.stringify(UserData));
  }, [isUser, UserData]);

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMsg("");

    const currentData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch(
        `${API_URL}/users?email=${currentData.email}&password=${currentData.password}`,
      );
      const data = await response.json();

      if (data.length > 0) {
        const loggedInUser = data[0];

        localStorage.setItem("userLogin", JSON.stringify(true));
        localStorage.setItem("userData", JSON.stringify(loggedInUser));

        setIsUser(true);
        setUserData(loggedInUser);

        navigate("/userpage");
      } else {
        setErrorMsg("მომხმარებელი ვერ მოიძებნა ან პაროლი არასწორია!");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("სერვერთან კავშირი ვერ დამყარდა!");
    }
  }

  function handleLogOut() {
    localStorage.removeItem("userLogin");
    localStorage.removeItem("userData");
    setIsUser(false);
    setUserData(false);
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        isUser,
        setIsUser,
        UserData,
        setUserData,
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
