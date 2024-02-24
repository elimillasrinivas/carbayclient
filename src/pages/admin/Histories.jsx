import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

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

const EditProfileButton = styled.button`
  background-color: #1e0c60;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

const EditProfileForm = styled.div`
  margin-top: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const SaveButton = styled.button`
  background-color: #1e0c60;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
`;

const Histories = () => {
  const [userHistories, setUserHistories] = useState([]);
  const [status, setStatus] = useState("");
  const [editing, setEditing] = useState(false);
  const [history, setHistory] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  const fetchAllHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://carbay.onrender.com/api/admin/all/histories",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setUserHistories(response.data);
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching user history:", error);
    }
  };

  useEffect(() => {
    fetchAllHistory();
  }, []);

  const enterEditMode = (history) => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setEditing(true);
    setStatus(history.status);
    setHistory(history);
  };

  const handleUpdateHistory = async () => {
    setEditing(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://carbay.onrender.com/api/admin/history/${history._id}`,
        { status, user: history.user },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Update userHistories with the modified history item
      setUserHistories((prevHistories) => {
        const updatedHistories = prevHistories.map((item) =>
          item._id === history._id
            ? { ...item, status: response.data.status }
            : item
        );
        return updatedHistories;
      });
      setStatus(response.data.status);
      setEditing(false);
      setDataFetched(true);
    } catch (error) {
      console.error("Error upading history:", error);
    }
  };

  return (
    <div>
      {dataFetched ? (
        userHistories.length === 0 ? (
          <>No Histories Available</>
        ) : (
          <>
            <HistoryContainer>
              <HistoryHeader>Histories</HistoryHeader>
              {editing && (
                <>
                  <EditProfileForm>
                    <InputLabel>
                      Status :
                      <InputField
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                    </InputLabel>

                    <SaveButton
                      onClick={() => {
                        handleUpdateHistory();
                      }}
                    >
                      Save
                    </SaveButton>
                    <CancelButton onClick={() => setEditing(false)}>
                      Cancel
                    </CancelButton>
                  </EditProfileForm>
                </>
              )}
              <HistoryList>
                {userHistories.map((item, index) => (
                  <HistoryItem key={index}>
                    <DateLabel>
                      {index + 1} ){" "}
                      <span style={{ color: "black" }}>Service Name</span> :{" "}
                      {item.serviceName}
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
                      {" "}
                      <span style={{ color: "black" }}>Car Company</span> :{" "}
                      {item.carCompany}
                    </ActionLabel>
                    <DateLabel>
                      <span style={{ color: "black" }}>Fuel Type</span> :{" "}
                      {item.fuelType}
                    </DateLabel>
                    <DateLabel>
                      <span style={{ color: "black" }}>Total Price</span> :{" "}
                      {item.totalPrice}
                    </DateLabel>
                    <DateLabel
                      style={{ backgroundColor: "lightgray", padding: "10px" }}
                    >
                      {" "}
                      <span style={{ color: "black" }}>Status</span>:{" "}
                      {item.status}
                    </DateLabel>

                    <EditProfileButton
                      onClick={() => {
                        enterEditMode(item);
                      }}
                    >
                      Update Status
                    </EditProfileButton>
                  </HistoryItem>
                ))}
              </HistoryList>
            </HistoryContainer>
          </>
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Histories;
