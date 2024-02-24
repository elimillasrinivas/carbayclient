import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.h2`
  color: #1e0c60;
`;

const ProfileField = styled.p`
  margin-bottom: 10px;
  margin-top: 30px;
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

const Profile = ({ userData }) => {
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(userData.userName);
  const [updatedEmail, setUpdatedEmail] = useState(userData.email);
  const [updatedMobile, setUpdatedMobile] = useState(userData.mobileNumber);

  const enterEditMode = () => {
    setUpdatedName(userData.userName);
    setUpdatedEmail(userData.email);
    setUpdatedMobile(userData.mobileNumber);

    setEditing(true);
  };

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "https://carbay.onrender.com/api/user/update",
        {
          userName: updatedName,
          email: updatedEmail,
          mobileNumber: updatedMobile,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setUpdatedEmail(response.data.email);
      setUpdatedName(response.data.userName);
      setUpdatedMobile(response.data.mobileNumber);
      alert("Updated Profile");
      setEditing(false);
    } catch (error) {
      console.error("Error upading user profile:", error);
    }
  };

  return (
    <ProfileContainer>
      {!editing ? (
        <div>
          <ProfileHeader>Profile</ProfileHeader>

          <ProfileField>
            <strong>Name:</strong> {updatedName}
          </ProfileField>
          <ProfileField>
            <strong>Email:</strong> {updatedEmail}
          </ProfileField>
          <ProfileField>
            <strong>Mobile:</strong> {updatedMobile}
          </ProfileField>
          <EditProfileButton onClick={enterEditMode}>
            Update Profile
          </EditProfileButton>
        </div>
      ) : (
        <div>
          <ProfileHeader>Update Profile</ProfileHeader>
          <EditProfileForm>
            <InputLabel>
              Name:
              <InputField
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </InputLabel>
            <InputLabel>
              Email:
              <InputField
                type="text"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
            </InputLabel>
            <InputLabel>
              MObile:
              <InputField
                type="text"
                value={updatedMobile}
                onChange={(e) => setUpdatedMobile(e.target.value)}
              />
            </InputLabel>
            <SaveButton onClick={handleUpdateProfile}>Save</SaveButton>
            <CancelButton onClick={() => setEditing(false)}>
              Cancel
            </CancelButton>
          </EditProfileForm>
        </div>
      )}
    </ProfileContainer>
  );
};

export default Profile;
