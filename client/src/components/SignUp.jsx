/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CCcxG0wjKsx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { useState } from "react"
import SignUpAsAdmin from "./SignUpAsAdmin";
import SignUpAsResident from "./SignUpAsResident";

export default function SignUp() {
  const [admin, setAdmin] = useState(false);
  const [resi, setResi] = useState(false);
  const adminClick = () => {
    setAdmin(true);
    setResi(false)
  }
    
  const resiClick = () => {
    setResi(true);
    setAdmin(false);
  }
    
  return (
    <>
      <div className="flex flex-col justify-center mb-10 ">
        <div className="flex justify-center">
          <div className="w-full space-y-4">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold mt-10">Create an account</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your information to get started
              </p>
            </div>
            <div className="grid max-w-sm mx-auto space-y-2">
              <Button className="w-full" onClick={adminClick}>
                Sign up as an Admin
              </Button>
              <Button className="w-full" onClick={resiClick}>
                Sign up as a Resident
              </Button>
            </div>
          </div>
        </div>
      </div>


      {admin && <SignUpAsAdmin />}
      {resi && <SignUpAsResident />}
    </>
  )
};
