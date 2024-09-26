/* eslint-disable react/prop-types */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Left from "./pages/home/leftPart/Left";
import Right from "./pages/home/rightPart/Right";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { useAuth } from "./context/Auth";
import PageNotFound from "./component/PageNotFound";

function Home() {
  return (
    <div className="flex w-full">
      <Left />
      <Right />
    </div>
  );
}

const ProtectedRoute = ({ element }) => {
  const { token, user } = useAuth(); // Ensure both token and user are checked

  // If `token` exists but `user` is still undefined, show a loading indicator
  if (token && !user) {
    return <div>Loading...</div>;
  }

  // If `user` exists, render the protected component, otherwise redirect to login
  return user ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="h-screen w-full bg-slate-700 text-white flex">
      <BrowserRouter>
        <Routes>
          {/* Protected Home Route */}
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
