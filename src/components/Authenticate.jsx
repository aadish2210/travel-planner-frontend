import React from 'react'
import {Input , Button} from "@nextui-org/react";
import axios from 'axios';
const Authenticate = () => {
 const [name,setName] = React.useState("");
 const [password ,  setPassword] = React.useState("");
 const [email , setEmail] = React.useState("");
 const [buttonText , setButtonText] = React.useState("Login"); 
 const handleSubmit = () =>{
    if(buttonText=="Sign up"){
     axios.post('http://localhost:3000/signup', {
    "name": name,
    "email": email,
    "password" : password
    })
    .then(function (response) {
    console.log(response);
    })
   .catch(function (error) {
    console.log(error);
    });
    }
    else{
      if(buttonText=="Sign up"){
        axios.post('http://localhost:3000/login', {
       "email": email,
       "password" : password
       })
       .then(function (response) {
        if(response.success) {
          console.log("Logged in");
        }
       })
      .catch(function (error) {
       console.log(error);
       });
       }
    }
 }

  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
        <div className="flex w-auto  justify-center  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {buttonText} to your account
              </h1>
              <form className="space-y-4 md:space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                  {buttonText=="Sign up" && <div>
                      <Input type="text" label="Username" onValueChange={setName}/>
                  </div>}
                  <div>
                  <Input type="email" label="Email" onValueChange={setEmail}/>
                  </div>
                  <div>
                    <Input type="password" label="Password" onValueChange={setPassword}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <Button className='w-auto'variant='ghost' onClick={handleSubmit}>{buttonText}</Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <button onClick={()=>setButtonText(buttonText=="Login" ? "Sign up" : "Login")}>{buttonText=="Login" ? "Sign up" : "Login"}</button>
                  </p>
              </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Authenticate