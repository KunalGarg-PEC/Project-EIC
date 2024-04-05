import React, { useState, useEffect } from "react";
import axios from "axios";
import ComplaintCard from "@/components/ComplaintCard";

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Fetch authorization token from localStorage
        const societyId = localStorage.getItem("societyId"); // Fetch societyId from localStorage

        if (!token || !societyId) {
          // Handle missing token or societyId
          console.error("Token or societyId is missing.");
          return;
        }

        const config = {
          headers: {
                Authorization: token ,// Set Authorization header
                societyId:societyId
          },
        };

        const response = await axios.get(
          "http://localhost:3000/api/v1/user/owner/getIssues",
          config
        );
        setComplaints(response.data); // Set the response data to the state variable
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

    return (
      
    <div>
      {complaints.map((complaint) => (
        <div key={complaint._id}>
          <ComplaintCard
            title={complaint.title}
            description={complaint.description}
            username={complaint.createdBy}
            time={complaint.createdAt}
          />
        </div>
      ))}
    </div>
  );
};

export default ComplaintList;
