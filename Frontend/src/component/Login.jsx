import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/Auth";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // context
  const {storeDataInLS} = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/users/login", {
        email,
        password,
      });
      // console.log('login successful:', data);
      if (data.success) {
        alert(data.message)
        storeDataInLS(data.token)
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="h-[230px] w-[300px] border">
          <h1 className="text-center text-xl mt-2 font-bold">Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="email" name="email" placeholder="Email" className="mt-4 p-2 rounded-lg outline-none bg-slate-700 text-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Password" className="mt-4 p-2 rounded-lg outline-none bg-slate-700 text-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Link to="/signup" className="mt-4 text-xl ml-2">if Not Regestered ? <span className="text-blue-500 underline cursor-pointer">Signup</span></Link>
            <div className="flex justify-center">

              <button type="submit" className="w-[60px] mt-4 py-2 px-3 bg-blue-600 hover:bg-blue-800 duration-300 rounded-lg">Login</button>
            
          
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Login