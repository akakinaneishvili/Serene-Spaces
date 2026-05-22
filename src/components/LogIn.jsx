import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import { useState } from "react";

function LogIn() {
  async function handleLogin(e) {
    e.preventDefault();

    const currentData = {
      firstname: e.target.firstname.value,
      password: e.target.password.value,
    };

    console.log(currentData);

    const respons = await fetch(
      `${API_URL}/users?firstname=${currentData.firstname}&password=${currentData.password}`,
    );

    const data = await respons.json();
    console.log(data);

    if (data.length > 0) {
      console.log("გილოცავთ! ავტორიზაცია წარმატებით გაიარეთ.");
    } else {
      console.log("მომხმარებელი ვერ მოიძებნა ან პაროლი არასწორია!");
    }
  }
  return (
    <>
      <div className="w-full bg-[#fff3dd] min-h-screen  pb-16 px-4 flex justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-orange-900/5 w-full max-w-md flex flex-col gap-6 border border-[#f3e0c0]"
        >
          <div className="text-center mb-2">
            <h2 className="text-4xl font-serif text-[#1e293b] mb-2 tracking-tight">
              Welcome Back
            </h2>
            <div className="w-12 h-1 bg-[#bc5f13] mx-auto rounded-full opacity-60"></div>
          </div>
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
                className="bg-[#fafafa] border border-[#e2e8f0] px-5 py-4 rounded-2xl focus:outline-none focus:border-[#bc5f13] transition-all font-light"
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
                className="bg-[#fafafa] border border-[#e2e8f0] px-5 py-4 rounded-2xl focus:outline-none focus:border-[#bc5f13] transition-all font-light"
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
