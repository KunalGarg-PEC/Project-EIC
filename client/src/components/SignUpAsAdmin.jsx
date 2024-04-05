import { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ImSpinner10 } from "react-icons/im";


export default function SignUpAsAdmin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contactNumber: "",
    societyname: "",
    societyaddress: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/owner/signup",
        formData
      );
      console.log("Sign up successful:", response.data);
      
      // Redirect to getIssues page on successful sign up
      const token = response.data.token;
      const society_key = response.data.society_key;
      localStorage.setItem("token",token)
      navigate("/getIssues");
      setIsLoading(false);
    } catch (error) {
      console.error("Sign up failed:", error);
      setIsLoading(false);
      // Handle error, show an error message
    }
  };

  return (
   <div className="mx-auto max-w-3xl">
  <div className="flex flex-col justify-center items-center mb-10 ">
    <div className="text-center">
      <h1 className="text-3xl font-bold">Join the Society</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Enter your information to become a member
      </p>
    </div>
  </div>

  <div className="space-y-2">
    <div>
      <Label htmlFor="full-name">Full name</Label>
      <Input
        id="username"
        placeholder="Enter your full name"
        required
        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        placeholder="Enter your email"
        required
        type="email"
        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        placeholder="Enter your password"
        required
        type="password"
        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="phone">Phone number</Label>
      <Input
        id="contactNumber"
        placeholder="Enter your phone number"
        required
        type="tel"
        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="society">Society name</Label>
      <Input
        id="societyname"
        placeholder="Enter your society name"
        required
        onChange={handleInputChange}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="address">Address</Label>
      <Textarea
        className="min-h-[100px]"
        id="societyaddress"
        placeholder="Enter your address"
        required
        onChange={handleInputChange}
      />
    </div>
    <Button onClick={handleSignUp}>
      {isLoading ? <ImSpinner10 /> : "Sign-Up"}
    </Button>
  </div>
</div>

  );
}
