import React from "react";

function Settings({ UserData, onBack }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-[#f3e0c0] dark:border-slate-800/60 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-serif font-bold text-gray-800 dark:text-white">
          Edit Profile Settings
        </h4>
        <button
          onClick={onBack}
          className="text-sm text-gray-400 hover:text-black dark:hover:text-white font-medium cursor-pointer transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-[#bc5f13] uppercase tracking-wider block mb-1">
              First Name
            </label>
            <input
              type="text"
              defaultValue={UserData?.firstname}
              className="w-full h-12 bg-[#fafafa] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60 rounded-2xl px-5 text-sm outline-none focus:border-[#bc5f13] dark:text-white font-medium"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-[#bc5f13] uppercase tracking-wider block mb-1">
              Last Name
            </label>
            <input
              type="text"
              defaultValue={UserData?.lastname}
              className="w-full h-12 bg-[#fafafa] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60 rounded-2xl px-5 text-sm outline-none focus:border-[#bc5f13] dark:text-white font-medium"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-[#bc5f13] uppercase tracking-wider block mb-1">
            Phone Number
          </label>
          <input
            type="text"
            defaultValue={UserData?.phone}
            className="w-full h-12 bg-[#fafafa] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60 rounded-2xl px-5 text-sm outline-none focus:border-[#bc5f13] dark:text-white font-medium"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#bc5f13] uppercase tracking-wider block mb-1">
            Delivery Address
          </label>
          <input
            type="text"
            defaultValue={UserData?.address}
            className="w-full h-12 bg-[#fafafa] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60 rounded-2xl px-5 text-sm outline-none focus:border-[#bc5f13] dark:text-white font-medium"
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={onBack}
            className="flex-1 h-12 rounded-2xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onBack}
            className="flex-1 h-12 rounded-2xl bg-[#bc5f13] text-white font-medium hover:bg-black transition-colors cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
