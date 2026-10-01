import logo from "../../assets/logo-text.png";

const Futer = () => {
  return (
    <footer className="container mx-auto my-6">

      {/* Main Footer */}
      <div className="flex justify-between items-start gap-6">

        {/* Logo + Description + Social */}
        <div>
          <div>
            <img src={logo} alt="Logo" />

            <h4>
              Curated tools, technologies and resources for developers
              building modern software.
            </h4>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="border border-black rounded-lg p-6 bg-white">
          <h2 className="text-black font-bold">PRODUCT</h2>
          <h4>Home</h4>
          <h4>Technology</h4>
          <h4>Project</h4>
        </div>

        {/* Company */}
        <div className="border border-black rounded-lg p-6 bg-white">
          <h2 className="text-black font-bold">COMPANY</h2>
          <h4>About</h4>
          <h4>Contact</h4>
          <h4>Careers</h4>
        </div>

        {/* Legal */}
        <div className="border border-black rounded-lg p-6 bg-white">
          <h2 className="text-black font-bold">LEGAL</h2>
          <h4>Privacy Policy</h4>
          <h4>Terms of Service</h4>
        </div>

      </div>

      {/* Horizontal line */}
      <hr className="border-t border-gray-200 my-6" />
<div className="flex justify-between items-start gap-6"><h2>2026 Devstack AllRight reserver</h2>
<div>
<h2>privacy</h2>
<h2>Tems</h2>
</div>
</div>
    </footer>
  );
};

export default Futer;