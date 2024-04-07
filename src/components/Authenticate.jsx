import React from 'react'
import {Input , Button} from "@nextui-org/react";
const Authenticate = () => {
 const [name,setName] = React.useState("");
 const [password ,  setPassword] = React.useState("");
 const [email , setEmail] = React.useState("");
  const [buttonText , setButtonText] = React.useState("Login"); 
  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
        <div className="flex w-auto  justify-center bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {buttonText} to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                  {buttonText=="Sign up" && <div>
                      <Input type="text" label="Username"/>
                  </div>}
                  <div>
                  <Input type="email" label="Email"/>
                  </div>
                  <div>
                    <Input type="password" label="Password"/>
                  </div>
                  <div className="flex items-center justify-between">
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <Button className='w-auto'>{buttonText}</Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={console.log("clecikef")}>{buttonText=="Login" ? "Sign up" : "Login"}</a>
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