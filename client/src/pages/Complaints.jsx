import React, { useState, useEffect } from "react";
import axios from "axios";

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
            Authorization: token // Set Authorization header
          },
          params: {
            societyId: societyId, // Set societyId as a query parameter
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
      <h2>Complaint List</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id}>
            <strong>Title:</strong> {complaint.title},{" "}
            <strong>Description:</strong> {complaint.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintList;
