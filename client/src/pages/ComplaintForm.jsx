import React, { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    name: "",
    societyName: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/resident/complaints",
        formData
      );
      console.log("Complaint raised successfully:", response.data);
      // Reset form data
      setFormData({
        title: "",
        description: "",
        name: "",
        societyName: "",
      });
    } catch (error) {
      console.error("Error raising complaint:", error);
      setError("Failed to raise complaint. Please try again later.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Raise a complaint</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Please fill out the form below to raise your complaint.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter the title of your complaint"
                  required
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="description"
                  placeholder="Enter the description of your complaint"
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="society-name">Society name</Label>
                  <Input
                    id="societyName"
                    placeholder="Enter the name of your society"
                    required
                    value={formData.societyName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {isLoading ? (
                <Button disabled className="w-full" type="submit">
                  Loading...
                </Button>
              ) : (
                <Button className="w-full" type="submit">
                  Raise Complaint
                </Button>
              )}
              {error && (
                <p className="text-red-500 dark:text-red-400">{error}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
