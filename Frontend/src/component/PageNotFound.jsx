import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-800 text-white">
      <h1 className="text-9xl font-bold animate-pulse">404</h1>
      <p className="text-xl mt-4 animate-fade-in-up">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 animate-bounce"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
