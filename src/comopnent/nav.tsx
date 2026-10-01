import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="container mx-auto flex justify-between items-center gap-2">
      {/* Logo */}
      <img src={logo} alt="Logo" />

      {/* Navigation Links */}
      <ul className="flex gap-4 text-black items-center">
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
          Sign In
        </button>

        <button className="px-5 py-2 rounded-full  bg-red-500  text-white font-medium hover:opacity-90 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;