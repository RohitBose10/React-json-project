import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./create.css";
import { Link } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    country: "",
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
  });
  const [imgState, setImage] = useState({});
  const [oldData, setOldData] = useState([]);

  // Fetch existing data on mount
  useEffect(() => {
    axios
      .get("http://localhost:1000/users")
      .then((res) => {
        setOldData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      imgHandler(file);
    }
  };

  let imgHandler = (file) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", () => {
      setImage(fileReader.result);
    });

    fileReader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate that all fields are filled
    if (
      !data.country ||
      !data.fname ||
      !data.lname ||
      !data.email ||
      !data.username ||
      !data.password ||
      !imgState
    ) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields before submitting.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return; // Stop submission if validation fails
    }

    console.log("Received data: ", data, imgState);

    let registerEmail = oldData.find((user) => user.email === data.email);
    let registerUName = oldData.find((user) => user.username === data.username);

    if (registerEmail) {
      Swal.fire({
        title: "Oops!",
        text: "Email already exists!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (registerUName) {
      Swal.fire({
        title: "Oops!",
        text: "Username already exists!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      // Adding default role 'user'
      let form_data = {
        country: data.country,
        firstname: data.fname,
        lastname: data.lname,
        email: data.email,
        username: data.username,
        password: data.password,
        role: "user", //default
        pro_img: imgState,
        
      };

      axios
        .post("http://localhost:1000/users", form_data)
        .then((res) => {
          Swal.fire({
            title: "Awesome!",
            text: "Account created successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });

          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
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
            <p className="p5">Create account</p>
            <Form.Group className="mb-4" controlId="formBasicCountry">
              <Form.Label>Country*</Form.Label>
              <Form.Control
                as="select"
                name="country"
                value={data.country}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="India">India</option>
                <option value="USA">United States of America</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email Address*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-4" controlId="formBasicFirstname">
                  <Form.Label>First Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="fname"
                    value={data.fname}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group className="mb-4" controlId="formBasicLastname">
                  <Form.Label>Last Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lname"
                    value={data.lname}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4" controlId="formBasicUsername">
              <Form.Label>Username*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
                value={data.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicProfileImage">
              <Form.Label>Profile Image*</Form.Label>
              <Form.Control
                type="file"
                name="pro_pic"
                onChange={handleFileChange}
              />
            </Form.Group>
            <br />
            <Button
              variant="primary"
              type="submit"
              className="d-flex justify-content-center mx-auto"
            >
              Create
            </Button>
            <br />
            <p className="link">
              Already have account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Sign in
              </Link>
            </p>
          </Form>
          <br />
        </Container>
      </div>
    </div>
  );
};

export default Create;
