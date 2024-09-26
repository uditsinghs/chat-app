import { useState } from "react";
import axios from 'axios';
import { Link} from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // context
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      alert("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/users/signup", {
        name,
        email,
        password,
        confirmPassword
      });
      console.log('Signup successful:', data);
      if (data.success) {
        alert(data.message)
        localStorage.setItem("chat-app", JSON.stringify(data.user))
        
        setEmail('')
        setPassword('')
        setName('')
        setConfirmPassword('')
        
      }
    } catch (error) {
      console.error('Error during signup:', error);
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[400px] w-[350px] border p-4">
        <h1 className="text-xl text-center mt-2 font-bold">Chat <span className="text-green-500">App</span></h1>
        <h1 className="text-xl ml-2 mt-2 font-bold">Signup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="mt-4 p-2 rounded-lg outline-none bg-slate-700 text-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mt-4 p-2 rounded-lg outline-none bg-slate-700 text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="mt-4 p-2 rounded-lg outline-none bg-slate-700 text-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="mt-4 p-2 rounded-lg outline-none bg-slate-700 text-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <Link to="/login" className="mt-4">Already have an account? <span className="text-blue-500 underline cursor-pointer">Login</span></Link>
            <button type="submit" className="mt-4 py-2 px-3 bg-blue-600 hover:bg-blue-800 duration-300 rounded-lg">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
