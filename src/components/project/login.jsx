import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import base_url, { auth_end } from "../../api/api_url";
import "./create.css";
const Login = () => {
  let api = base_url + auth_end.users;
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Received data", data);

    if (!data.email || !data.password) {
      Swal.fire({
        title: "Oops!",
        text: "Please fill out all the required fields!",
        icon: "error",
      });
    } else {
      axios
        .get(api)
        .then((res) => {
          const users = res.data;

          // Find the user with matching email and password
          const user = users.find(
            (user) =>
              user.email === data.email && user.password === data.password
          );

          if (user) {
            // Store user info in localStorage
            localStorage.setItem("userId", user.id);
            localStorage.setItem("userRole", user.role); // Save user role (admin/user)

            Swal.fire({
              title: "Awesome!",
              text: "Welcome Back!",
              icon: "success",
            });

            // Redirect to the profile page
            navigate(`/`);
            window.location.reload();
          } else {
            Swal.fire({
              title: "Oops!",
              text: "The email or password you entered is incorrect. Please try again!",
              icon: "error",
            });
          }
        })
        .catch((err) => {
          console.log("Error during login", err);
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong!",
            icon: "error",
          });
        });
    }
  };

  return (
    <div className="new-create-page">
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Container
          style={{
            backgroundColor: "#24364F",
            borderRadius: "15px",
            maxWidth: "550px",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <div className="footer-logo1">
              <img
                src="assets/images/logo2.png"
                alt="gamevault Logo"
                className="gamevault-logo"
              />
            </div>
            <p className="p5">Sign In</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <Button
              variant="primary"
              type="submit"
              className="d-flex justify-content-center mx-auto"
            >
              Sign in
            </Button>
            <br />
            <p className="link">
              New to GameVault?{" "}
              <Link to="/create" style={{ textDecoration: "none" }}>
                Create Account
              </Link>
            </p>
          </Form>
          <br />
        </Container>
      </div>
    </div>
  );
};

export default Login;
