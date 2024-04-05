/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CCcxG0wjKsx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function SignUp() {
    const [admin,setAdmin] = useState(false)
    const [resident,setResident] = useState(false)
  return (
    
    <>
    <div className="w-full space-y-4">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
      </div>
      <div className="grid max-w-sm mx-auto space-y-2">
        <Button className="w-full" onClick = {setAdmin(true)} >Sign up as an admin</Button>
        <Button className="w-full" >Sign up as a resident</Button>
      </div>
    </div>
    {
        admin&& <signupforadmin />
        resident && <signup

    }
    </>
  )
}
