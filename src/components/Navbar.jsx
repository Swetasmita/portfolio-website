import logo from "../assets/profile.svg";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/swetasmita-chinaray-32984880/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Swetasmita?tab=repositories"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://codesandbox.io/dashboard/drafts?workspace=ws_961mNTMfJ41ogdLADLJYFR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodesandbox />
        </a>
        <a href="https://x.com/SChinaray12" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
