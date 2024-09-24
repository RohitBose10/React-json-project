import React, { useEffect, useState } from "react";
import base_url, { auth_end } from "../../api/api_url";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Edit from "./edit";
import "./profile.css";

const Profile = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const api = base_url + auth_end.users + `${id}`;
  console.log("Api", api);

  const [state, setState] = useState({
    country: "",
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    pro_img: "",
  });

  const [showEdit, setshowEdit] = useState(false);

  const getDetails = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  };

  useEffect(() => {
    getDetails();
  }, [api]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.sessionStorage.clear();

    navigate("/login");
    window.location.reload();
  };

  const handleEditClick = () => {
    setshowEdit(true);
  };

  const handleCloseEditProfile = () => {
    setshowEdit(false);
    getDetails();
  };

  return (
    <div className="profile-container">
      <div className="profile-photo-section">
        <div className="profile-photo">
          <img src={state.pro_img} alt="Profile" />
        </div>
        <br />
        <h4 style={{ fontWeight: "bold", color: "black" }}>{state.username}</h4>
      </div>

      <div className="profile-details-section">
        <br />
        <h4>Profile Details</h4>
        <div className="profile-detail-item">
          <label>User-ID:</label>
          <input type="text" value={id} readOnly />
        </div>
        <div className="profile-detail-item">
          <label>Country:</label>
          <input type="text" value={state.country} readOnly />
        </div>

        <Row>
          <Col xs={12} md={6}>
            <div className="profile-detail-item">
              <label>Firstname:</label>
              <input type="text" value={state.firstname} readOnly />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="profile-detail-item">
              <label>Lastname:</label>
              <input type="text" value={state.lastname} readOnly />
            </div>
          </Col>
        </Row>
        <div className="profile-detail-item">
          <label>Username:</label>
          <input type="text" value={state.username} readOnly />
        </div>
        <div className="profile-detail-item">
          <label>Email:</label>
          <input type="text" value={state.email} readOnly />
        </div>
        <div className="profile-detail-item">
          <label>Password:</label>
          <input type="text" value={state.password} readOnly />
        </div>

        <div className="profile-buttons">
          <button onClick={handleEditClick}>Edit Profile</button>
          <button onClick={handleLogout} style={{ backgroundColor: "red" }}>
            Log out
          </button>
        </div>
      </div>

      <Edit showEdit={showEdit} onClose={handleCloseEditProfile} />
    </div>
  );
};

export default Profile;
