import React from 'react'
import {Input , Button} from "@nextui-org/react";
import {Code} from "@nextui-org/react";
import axios from 'axios';
const ForgotPassword = () => {
    const [email , setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [flag , setFlag] = React.useState(false);
    const handleSubmit = () => {
        //setFlag(true)
        axios.post('http://localhost:3000/resetPassword', {
        "email": email,
        "password" : password
         })
        .then(function (response) {
            if(response.data.success) setFlag(true);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
  return (
    <section className="">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="flex w-auto  justify-center  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Update Password
              </h1>
              <form className="space-y-4 md:space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                  <div>
                  <Input type="email" label="Email" onValueChange={setEmail}/>
                  </div>
                  <div>
                    <Input type="password" label="Password" onValueChange={setPassword}/>
                  </div>
                  <Button className='w-auto'variant='ghost' onClick={handleSubmit}>Update Password</Button>
              </form>
          </div>
        </div>
        {flag ? <Code color="success" className='mt-5'>Password Successfully Updated!</Code> : null}
    </div>
    </section>
  )
}

export default ForgotPassword