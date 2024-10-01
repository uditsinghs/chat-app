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
function App() {
  const { token } = useAuth();
  return (
    <div className="h-screen w-full bg-slate-700 text-white flex">
      <BrowserRouter>
        <Routes>
          {/* Protected Home Route */}
        
          <Route path="/" element={token ? (<Home />) : <Navigate to={"/login"} />} />

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
