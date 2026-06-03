import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import { useState } from "react";

function LogIn() {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

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
      sessionStorage.setItem("currentUser", JSON.stringify(data[0]));
      window.dispatchEvent(new Event("auth-change"));
      navigate("/profile");
    } else {
      setErrorMsg("მომხმარებელი ვერ მოიძებნა ან პაროლი არასწორია!");
    }
  }

  return (
    <>
      <div className="w-full bg-[#fff3dd] dark:bg-slate-950 min-h-screen pb-16 px-4 flex justify-center items-center transition-colors duration-300">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-xl shadow-orange-900/5 w-full max-w-md flex flex-col gap-6 border border-[#f3e0c0] dark:border-slate-800 transition-colors duration-300"
        >
          <div className="text-center mb-2">
            <h2 className="text-4xl font-serif text-[#1e293b] dark:text-white mb-2 tracking-tight">
              Welcome Back
            </h2>
            <div className="w-12 h-1 bg-[#bc5f13] mx-auto rounded-full opacity-60"></div>
          </div>

          {errorMsg && (
            <div className="bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 text-sm p-4 rounded-xl text-center font-medium border border-red-200 dark:border-red-900/30">
              {errorMsg}
            </div>
          )}

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#bc5f13] ml-1">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="John"
                required
                className="bg-[#fafafa] dark:bg-slate-800 border border-[#e2e8f0] dark:border-slate-700 px-5 py-4 rounded-2xl focus:outline-none focus:border-[#bc5f13] transition-all font-light dark:text-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#bc5f13] ml-1">
                Enter the password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                minLength={6}
                className="bg-[#fafafa] dark:bg-slate-800 border border-[#e2e8f0] dark:border-slate-700 px-5 py-4 rounded-2xl focus:outline-none focus:border-[#bc5f13] transition-all font-light dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-[#bc5f13] text-white py-5 rounded-3xl font-medium text-lg hover:bg-[#a04e0e] transition-all duration-300 shadow-lg shadow-orange-700/20 active:scale-95 w-full"
            >
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn;
