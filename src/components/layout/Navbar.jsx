import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        Subin K K
      </div>

      <nav>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#qalab">QA Lab</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
}

export default Navbar;