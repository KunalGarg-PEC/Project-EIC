/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qp4ERf5U8Ac
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function AfterLogInPage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center space-x-4">
      <Button onClick={() => {
        navigate('')
      }}>See Your Complaint</Button>
      <Button onClick={() => {
        navigate("/resident/dashboard/complaint");
      }}>Post a Complaint</Button>
    </div>
  )
}

