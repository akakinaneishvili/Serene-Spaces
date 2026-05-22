import { Link, NavLink } from "react-router-dom";
import About from "../Pages/About";

function Footer() {
  return (
    <div className="bg-[rgba(163,148,133,0.3)] w-full py-20 text-[rgba(45,40,35,1)]">
      <div className="max-w-7xl m-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        <nav>
          <p className="text-3xl font-serif font-bold italic">Serene Spaces</p>
        </nav>

        <nav>
          <ul className="space-y-3 text-[rgba(45,40,35,0.7)]">
            <li className="hover:text-black cursor-pointer transition-colors">
              Abuse
            </li>

            <li className="hover:text-black cursor-pointer transition-colors">
              Blog
            </li>

            <Link
              to="/About"
              className="hover:text-black cursor-pointer transition-colors"
            >
              About Us
            </Link>
          </ul>
        </nav>

        <nav className="flex flex-col gap-6">
          <p className="text-2xl font-serif">Join Newsletter</p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Your Email Address"
              className="bg-transparent text-black w-full sm:w-64 h-12 rounded-full border border-[rgba(45,40,35,0.3)] px-6 outline-none focus:border-black transition-all placeholder:text-[rgba(45,40,35,0.5)]"
            />

            <button className="bg-[rgba(45,40,35,1)] text-white px-8 h-12 rounded-full font-bold hover:bg-black transition-colors">
              Submit
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Footer;
