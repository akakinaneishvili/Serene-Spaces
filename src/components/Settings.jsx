import { useRef, useState } from "react";
import pencil from "../assets/pencil.svg";
import { useUser } from "../context/AuthContext";

function Settings({ value, label }) {
  const emlInput = useRef(null);
  const [emailReadOnli, setemailReadOnli] = useState(true);
  const [text, settext] = useState(value || "");

  return (
    <>
      <div className="p-5 rounded-2xl bg-[#fafafa] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60">
        <div className="text-xs font-semibold text-[#bc5f13] block mb-1 uppercase tracking-wider">
          {label}
        </div>
        <span className="flex text-base text-gray-800 dark:text-slate-200 font-medium break-all">
          <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            readOnly={emailReadOnli}
            ref={emlInput}
            className={` ${
              emailReadOnli
                ? "outline-none border-none pointer-events-none"
                : "outline-none border-b-2 border-[#bc5f13] pb-1"
            }`}
          />
          {!emailReadOnli ? (
            <div className="flex items-center gap-3 ml-auto font-sans text-sm font-semibold select-none">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  settext(value);
                  setemailReadOnli(true);
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                className="text-[#bc5f13] hover:opacity-80 transition-opacity cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setemailReadOnli(true);
                }}
              >
                Save
              </button>
            </div>
          ) : (
            <img
              src={pencil}
              className="ml-auto cursor-pointer"
              onClick={() => {
                setemailReadOnli(false);
              }}
            />
          )}
        </span>
      </div>
    </>
  );
}

export default Settings;
