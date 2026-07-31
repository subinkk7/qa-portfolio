import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Subin K K</h2>

      <p>Lead Quality Analyst</p>

      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/subin-pilanhi"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://github.com/subinkk7"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>

      <p className="copyright">
        © {year} Subin K K. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;