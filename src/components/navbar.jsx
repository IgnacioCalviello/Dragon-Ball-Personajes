import { Link } from "wouter";

export default function Navbar() {
  return (
    <header className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <button
          className="btn btn-ghost text-xl"
          onClick={() => history.back()}
        >
          ⇦ Dragon Ball
        </button>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/personajes">Personajes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
