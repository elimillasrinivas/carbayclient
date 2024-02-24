import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const HistoryHeader = styled.h2`
  color: #1e0c60;
`;

const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const HistoryItem = styled.li`
  margin-bottom: 10px;
  margin-top: 20px;
`;

const DateLabel = styled.strong`
  display: block;
  color: #1e0c60;
  margin: 10px;
`;

const ActionLabel = styled.strong`
  color: #1e0c60;
  margin: 10px;
`;

const History = ({ userData }) => {
  const [userHistory, setUserHistory] = useState([]);

  const fetchAllHistory = async () => {
    try {
      const response = await axios.get(
        `https://carbay.onrender.com/api/user/history/${userData._id}`
      );
      setUserHistory(response.data);
    } catch (error) {
      console.error("Error fetching user history:", error);
    }
  };
  useEffect(() => {
    fetchAllHistory();
  }, []);
  return (
    <HistoryContainer>
      <HistoryHeader>Booking/s</HistoryHeader>
      <HistoryList>
        {userHistory.map((item, index) => (
          <HistoryItem key={index}>
            <DateLabel>
              {index + 1} ) <span style={{ color: "black" }}>Service Name</span>{" "}
              : {item.serviceName}
            </DateLabel>
            <ActionLabel>
              <span style={{ color: "black" }}>Service Plan</span> :{" "}
              {item.servicePlan}
            </ActionLabel>
            <DateLabel>
              <span style={{ color: "black" }}>Car Model</span> :{" "}
              {item.carModel}
            </DateLabel>
            <ActionLabel>
              <span style={{ color: "black" }}>Total Price</span> :{" "}
              {item.totalPrice}
            </ActionLabel>
            <DateLabel>
              <span style={{ color: "black" }}>Fuel Type</span> :{" "}
              {item.fuelType}
            </DateLabel>
            <ActionLabel>
              {" "}
              <span style={{ color: "black" }}>Car Company</span> :{" "}
              {item.carCompany}
            </ActionLabel>
            <DateLabel
              style={{ backgroundColor: "lightgray", padding: "10px" }}
            >
              {" "}
              <span style={{ color: "black" }}>Status</span>: {item.status}
            </DateLabel>
          </HistoryItem>
        ))}
      </HistoryList>
    </HistoryContainer>
  );
};

export default History;
