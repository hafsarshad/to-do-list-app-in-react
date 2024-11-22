import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Simple hardcoded authentication logic
      if (email === "test@example.com" && password === "password123") {
        // Simulate saving the user session
        localStorage.setItem("auth", JSON.stringify({ email }));
        setError("");
        navigate("/dashboard"); // Navigate to the dashboard
      } else {
        setError("Invalid email or password.");
      }
    };
  

    return (
     <div className=" flex flex-col items-center   h-screen bg-blue-300 ">
        {/* heading div */}
         <div className=" w-[60%] mt-4 text-center ">
              <h1 className="text-4xl text-white">In-list Your Daily Tasks</h1>
              <h1 className=' text-3xl  text-white'> Make discipline in life and Map Your Mind</h1>  
           </div>

         {/* form div */}
           <div className="w-full mx-auto mt-4 max-w-sm p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleLogin}>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
            </div>
           

       
           

           
       
       
      </div>
    );
};

export default Login;