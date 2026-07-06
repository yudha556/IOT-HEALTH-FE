import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/95 px-6 py-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 w-full">
      <div className="flex w-full items-center justify-between gap-4">
        <Link to="/" className="text-lg font-semibold text-slate-900 dark:text-white">
          IOT Health
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
          <Link to="/" className="rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            Home
          </Link>
          <Link to="/scan" className="rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            Scan
          </Link>
          <Link to="/result" className="rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            Result
          </Link>
          <Link to="/history" className="rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            History
          </Link>
        </nav>
      </div>
    </header>
  );
}
