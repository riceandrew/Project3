import Link from "next/link";

const Navbar = () => (
  <nav
    className="navbar navbar-expand navbar-dark
    bg-dark mb-4"
  >
    <div className="container">
      <h1 className="navbar-brand" href="#">
        Vegan Gems
      </h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li>
              <Link href="/user">
                <a className="nav-link">User Login</a>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
