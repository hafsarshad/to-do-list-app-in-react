import React from 'react';

const Login = () => {
    return (
     <div className=" flex flex-col items-center   h-screen bg-blue-300 ">
         <div className=" w-[60%] mt-4 text-center ">
              <h1 className="text-4xl text-white">In-list Your Daily Tasks</h1>
              <h1 className=' text-3xl  text-white'> Make discipline in life and Map Your Mind</h1>  
           </div>

         
           <div className="w-full mx-auto mt-4 max-w-sm p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form >
                <div className="text-red-500 text-sm mb-4"></div>
                    {/* email div */}
                    <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email </label>
                    <input id="email" type="email" className="w-full px-4 py-2 border rounded"  required
                    
                    />
                    </div>
                {/* password div */}
                    <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="password" >Password</label>
                    <input id="password" type="password" className="w-full px-4 py-2 border rounded" required
                    />
                    </div>

                    <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" >
                    Login
                    </button>
            </form>
            </div>
           

       
           

           
       
       
      </div>
    );
};

export default Login;