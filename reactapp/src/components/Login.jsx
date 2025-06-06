import React, { useState } from 'react'



function Login() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
        <button onClick={()=>{
           
            setIsLogin((!isLogin)?true:false);
        }}>
            {(!isLogin)?"Log In":"Log Out"}
        </button>
        {
            (isLogin)?(<p>Welcome To App</p>):(<p>Login First</p>)
        }
    </div>
  )
}

export default Login