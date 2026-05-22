import { useState } from "react";
import { API_URL } from "../config";

function Registration() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  async function handleSubmmit(e) {
    e.preventDefault();

    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      password: e.target.password.value,
    };

    const user = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsSuccessOpen(true);
    e.target.reset();
  }

  return (
    <div className="w-full bg-[#fff3dd] pt-48 pb-16 px-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmmit}
        className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-orange-900/5 w-full max-w-xl flex flex-col gap-6 border border-[#f3e0c0]"
      >
        <div className="text-center mb-4">
          <h2 className="text-4xl font-serif text-[#1e293b] mb-2 tracking-tight">
            Create Profile
          </h2>
          <div className="w-12 h-1 bg-[#bc5f13] mx-auto rounded-full opacity-60"></div>
          <p className="text-[#64748b] mt-4 font-light italic">
            Please fill in the details below
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Doe"
              required
              className="bg-[#fafafa] border border-[#e2e8f0] px-5 py-4 rounded-2xl focus:outline-none focus:border-[#bc5f13] transition-all font-light"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#bc5f13] ml-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            className="bg-[#fafafa] border border-[#e2e8f0] px-5 py-4 rounded-2xl focus:outline-none focus:border-[#bc5f13] transition-all font-light"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#bc5f13] ml-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+995 5xx xx xx xx"
            required
            className="bg-[#fafafa] border border-[#e2e8f0] px-5 py-4 rounded-2xl focus:outline-none focus:border-[#bc5f13] transition-all font-light"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#bc5f13] ml-1">
            Residential Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="Tbilisi, Georgia"
            required
            className="bg-[#fafafa] border border-[#e2e8f0] px-5 py-4 rounded-2xl focus:outline-none focus:border-[#bc5f13] transition-all font-light"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#bc5f13] ml-1">
            Create Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            required
            minLength={6}
            pattern="^(?=.*[A-Za-z])[A-Za-z0-9]+$"
            title="პაროლი უნდა შეიცავდეს ლათინურ ასოებს"
            className="bg-[#fafafa] border border-[#e2e8f0] px-5 py-4 rounded-2xl focus:outline-none focus:border-[#bc5f13] transition-all font-light"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#bc5f13] text-white py-5 rounded-3xl font-medium text-lg hover:bg-[#a04e0e] transition-all duration-300 shadow-lg shadow-orange-700/20 active:scale-95"
        >
          Register Now
        </button>
      </form>

      {isSuccessOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white p-8 rounded-[2rem] max-w-sm w-full text-center shadow-2xl border border-[#f3e0c0] flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex justify-center items-center text-green-600 text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-serif text-[#1e293b]">გილოცავთ!</h3>
            <p className="text-[#64748b] font-light">
              თქვენ წარმატებით გაიარეთ რეგისტრაცია.
            </p>
            <button
              onClick={() => setIsSuccessOpen(false)}
              className="mt-2 w-full bg-[#bc5f13] text-white py-3 rounded-xl font-medium hover:bg-[#a04e0e] transition-all duration-300"
            >
              დახურვა
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;
