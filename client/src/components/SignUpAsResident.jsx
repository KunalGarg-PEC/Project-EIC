import React, { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SignUpAsResident = () => {
  const [formData, setFormData] = useState({
    residentname: "",
    contactNumber: "",
    email: "",
    password: "",
    blockNumber: "",
    roomNumber:"",
    societyidid: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/resident/signup",
        formData
      );
      const { jwt } = response.data;

      // Store JWT token and society key in localStorage
      const societyKey = formData.societyid;
      localStorage.setItem("token", jwt);
      localStorage.setItem("societyKey", societyKey);

      // Redirect to desired page after successful signup
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto prose lg:prose-xl">
        <div className="space-y-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">
                Register for Resident's Pass
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your information to register for a visitor's pass
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="residentname"
                    placeholder="Enter your name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="contactNumber"
                    placeholder="Enter your phone number"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  required
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="block">Block/Wing</Label>
                <Input
                  id="blockNumber"
                  placeholder="Enter your block/wing"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="block">Room Number</Label>
                <Input
                  id="roomNumber"
                  placeholder="Enter your block/wing"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="id">Unique ID</Label>
                <Input
                  id="societyid"
                  placeholder="Enter your unique ID"
                  required
                  onChange={handleChange}
                />
              </div>
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpAsResident;
