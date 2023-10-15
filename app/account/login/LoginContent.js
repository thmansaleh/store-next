
import Link from 'next/link';
 import './style.css' 
 import { ToastContainer, toast } from 'react-toastify'; 
  
 const LoginContent = () => { 
   const notify = () =>  toast.error('username and password not correct', { 
     position: "top-left", 
     autoClose: 3000, 
     hideProgressBar: true, 
     closeOnClick: true, 
     pauseOnHover: true, 
     draggable: true, 
     progress: undefined, 
     theme: "colored", 
     }); 
   return ( 
  
 <div className="login-container"> 
  
   <form className="form" action=""> 
  
     <h3 className="sign-in-title">Sign In</h3> 
  
    <input placeholder="Email" type="email" /> 
  
  
  
  
 <input placeholder="Password" type="password" /> 
  
     <span className="forgot-password">Forgot Password?</span> 
     <button type="submit" onClick={()=>notify()}>Sign In</button> 
     <div> 
       <span className="create-account-title">Don't have an account?</span> 
       <Link href='/register' className="register-title">Register</Link> 
     </div> 
   </form> 
  <ToastContainer/> 
 </div> 
   ) 
 } 
  
 export default LoginContent
