/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CCcxG0wjKsx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { useState } from "react"
import LogInAsAdmin from "./LogInAsAdmin";
import LogInAsResident from "./LogInAsResident";


export default function LogIn() {
    const [logadmin,setLogAdmin]=useState(false);
    const logadminClick= () => {
        setLogAdmin(true);
        setLogResi(false);
    }
    const [logresi,setLogResi]=useState(false);
    const logresiClick=() => {
        setLogResi(true);
        setLogAdmin(false);
    }
    
  return (
      
    <>
   <div className="flex flex-col items-center justify-center mb-10">
  <div className="w-full space-y-4">
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="text-gray-500 dark:text-gray-400">Enter your account details to login</p>
    </div>
    <div className="grid max-w-sm mx-auto space-y-2">
      <Button  className="w-full" onClick={logadminClick}>Log In as an admin</Button>
      <Button className="w-full" onClick={logresiClick}>Log In as a resident</Button>
    </div>
  </div>
</div>

    
    {
        logadmin&& <LogInAsAdmin/>
        
    
    }
    {
        logresi&& <LogInAsResident/>
    }
    </>
    
    
  )
}

