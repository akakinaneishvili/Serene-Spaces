import { useRef, useState, useEffect } from "react";
import pencil from "../assets/pencil.svg";

function Settings({ value, label, onSave, type = "text" }) {
  const emlInput = useRef(null);
  const [emailReadOnli, setemailReadOnli] = useState(true);
  const [text, settext] = useState(value || "");

  useEffect(() => {
    settext(value || "");
  }, [value]);

  return (
    <div className="p-5 rounded-2xl bg-[#fafafa] dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800/60 w-full">
      <div className="text-xs font-semibold text-[#bc5f13] block mb-1 uppercase tracking-wider">
        {label}
      </div>
      <span className="flex justify-between items-center text-base text-gray-800 dark:text-slate-200 font-medium w-full gap-2">
        <input
          type={type}
          value={text}
          onChange={(e) => settext(e.target.value)}
          readOnly={emailReadOnli}
          ref={emlInput}
          className={` bg-transparent ${
            emailReadOnli
              ? "outline-none border-none pointer-events-none"
              : "outline-none border-b-2 border-[#bc5f13] pb-1"
          }`}
        />
        {!emailReadOnli ? (
          <div className="flex items-center gap-4 ml-auto font-sans text-sm font-semibold select-none flex-shrink-0 whitespace-nowrap pl-2">
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
                if (onSave && text !== value) {
                  onSave(text);
                }
                setemailReadOnli(true);
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <img
            src={pencil}
            className="ml-auto cursor-pointer w-5 h-5 hover:scale-110 transition-transform flex-shrink-0"
            onClick={() => {
              setemailReadOnli(false);
              setTimeout(() => {
                emlInput.current?.focus();
              }, 50);
            }}
            alt="Edit"
          />
        )}
      </span>
    </div>
  );
}

export default Settings;
