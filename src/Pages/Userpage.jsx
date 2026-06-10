import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthContext";
import { useEffect, useRef, useState } from "react";

import Settings from "../components/Settings";

function UserPage() {
  const emlInput = useRef(null);
  const [emailReadOnli, setemailReadOnli] = useState(true);

  const { isUser, handleLogOut, UserData } = useUser();
  let navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!isUser) {
      navigate("/login");
    }
  }, [isUser, navigate]);

  if (!UserData) {
    return (
      <div className="w-full min-h-screen bg-[#fff3dd] dark:bg-slate-950 pt-36 text-center text-gray-800 dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen bg-[#fff3dd] dark:bg-slate-950 pt-36 pb-16 px-4 md:px-8 transition-colors duration-300">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-[#f3e0c0] dark:border-slate-800/60 h-fit text-center">
            <div className="w-24 h-24 bg-[#bc5f13] text-white rounded-full flex justify-center items-center text-3xl font-serif font-bold mx-auto shadow-lg shadow-orange-700/20 mb-4 uppercase">
              {UserData.firstname ? UserData.firstname[0] : "U"}
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-800 dark:text-white capitalize">
              {UserData.firstname} {UserData.lastname}
            </h3>

            <div className="w-full h-px bg-gray-100 dark:bg-slate-800 my-6"></div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-8">
            {activeTab === "overview" && (
              <>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-[#f3e0c0] dark:border-slate-800/60">
                  <h4 className="text-xl font-serif font-bold text-gray-800 dark:text-white mb-6">
                    Personal Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Settings value={UserData.email} label="Email Address" />
                    <Settings value={UserData.phone} label="Phone Number" />

                    <div className="sm:col-span-2">
                      <Settings
                        value={UserData.address}
                        label="Delivery Address"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-[#f3e0c0] dark:border-slate-800/60">
                  <h4 className="text-xl font-serif font-bold text-gray-800 dark:text-white mb-6">
                    Account Overview
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-[#fafafa] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60">
                      <span className="text-xs font-semibold text-[#bc5f13] block mb-1 uppercase tracking-wider">
                        Account Status
                      </span>
                      <span className="text-base text-gray-800 dark:text-slate-200 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                        Active
                      </span>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#fafafa] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60">
                      <span className="text-xs font-semibold text-[#bc5f13] block mb-1 uppercase tracking-wider">
                        Registration Date
                      </span>
                      <span className="text-base text-gray-800 dark:text-slate-200 font-medium">
                        June 2026
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-[#f3e0c0] dark:border-slate-800/60">
              <h4 className="text-xl font-serif font-bold text-gray-800 dark:text-white mb-4">
                Recent Orders
              </h4>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-4xl mb-3">📦</div>
                <p className="text-gray-500 dark:text-slate-400 text-sm">
                  You haven't placed any orders yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
