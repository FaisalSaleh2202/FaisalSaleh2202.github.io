import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="page-shell flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404 error</p>
      <h1 className="mt-4 text-5xl font-semibold text-heading">Page not found.</h1>
      <p className="mt-5 text-mist">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="focus-ring mt-8 rounded-full bg-sky px-6 py-3 text-sm font-bold text-slate-900"
      >
        Return home
      </Link>
    </main>
  );
}

export default NotFoundPage;
