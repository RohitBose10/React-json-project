import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Col, Container } from "react-bootstrap";
import "./profile.css";
import base_url, { auth_end } from "../../api/api_url";
import Swal from "sweetalert2";
import { Row } from "react-bootstrap";
function Edit({ showEdit, onClose }) {
  const navigate = useNavigate();
  let { id } = useParams();
  let api = base_url + auth_end.users + `${id}`;

  let [state, setState] = useState({
    country: "",
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    pro_img: "",
  });

  const getDetails = () => {
    axios
      .get(api)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios error", err);
      });
  };

  useEffect(() => {
    getDetails();
  }, [api]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:1000/users/${id}`, state)
      .then((res) => {
        Swal.fire({
          title: "Awesome!",
          text: "Your data updated successfully!",
          icon: "success",
        });
        onClose();
        navigate(`/profile/${id}`);
      })
      .catch((err) => {
        alert("Error updating");
        console.log("Update error", err);
      });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await getBase64(file);
    setState({
      ...state,
      pro_img: base64,
    });
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  return (
    <div
      className={`editprofile-container profile-details-section ${
        showEdit ? "open" : ""
      }`}
    >
      <Container>
        <br />

        <h4>Update Profile Details</h4>
        <br />
        <form onSubmit={submitHandler} className="editform">
          <div className="profile-detail-item">
            <label htmlFor="country" id="formlabel">
              Country
            </label>

            <select
              name="country"
              value={state.country}
              onChange={changeHandler}
              id="forminput"
            >
              <option value="India">India</option>
              <option value="USA">United States of America</option>
              <option value="Russia">Russia</option>
              <option value="China">China</option>
            </select>
          </div>
          <Row>
            <Col xs={12} md={6}>
              <div className="profile-detail-item">
                <label htmlFor="firstname" id="formlabel">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstname"
                  value={state.firstname}
                  onChange={changeHandler}
                  id="forminput"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="profile-detail-item">
                <label htmlFor="lastname" id="formlabel">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastname"
                  value={state.lastname}
                  onChange={changeHandler}
                  id="forminput"
                />
              </div>
            </Col>
          </Row>
          <div className="profile-detail-item">
            <label htmlFor="username" id="formlabel">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={state.username}
              onChange={changeHandler}
              id="forminput"
            />
          </div>
          <div className="profile-detail-item">
            <label htmlFor="email" id="formlabel">
              Email
            </label>

            <input
              type="text"
              name="email"
              value={state.email}
              onChange={changeHandler}
              id="forminput"
            />
          </div>
          <div className="profile-detail-item">
            <label htmlFor="password" id="formlabel">
              Password
            </label>

            <input
              type="text"
              name="password"
              value={state.password}
              onChange={changeHandler}
              id="forminput"
            />
          </div>
          <div className="profile-detail-item">
            <label htmlFor="pro_img" id="formlabel">
              Image
            </label>

            <input
              type="file"
              name="pro_img"
              onChange={handleFileChange}
              id="formimage"
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-dark"
              className="update-button"
              type="submit"
              style={{backgroundColor:"limegreen"}}
            >
              Update
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Edit;
