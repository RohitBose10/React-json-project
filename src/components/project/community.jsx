import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Carousel } from "react-bootstrap";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./community.css";

const Community = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    review: "",
    rating: 0,
  });
  const [imgState, setImage] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/reviews")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (newRating) => {
    setFormData((prev) => ({
      ...prev,
      rating: newRating,
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
    if (!formData.username || !formData.review || formData.rating === 0 || !imgState) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields before submitting.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return; // Stop submission if validation fails
    }
  
    const reviewData = {
      ...formData,
      review_img: imgState,
    };
  
    axios
      .post("http://localhost:1000/reviews", reviewData)
      .then((res) => {
        Swal.fire({
          title: "Success",
          text: "Review submitted successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
  
        // Refresh reviews after submission
        axios
          .get("http://localhost:1000/reviews")
          .then((res) => {
            setReviews(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
  
        navigate("/community");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div className="new-review-page">
      <Container fluid className="new-carousel-container">
        <div className="new-carousel-wrapper">
          <Carousel interval={3000}>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <Carousel.Item key={index}>
                  {review.review_img ? (
                    <img
                      className="new-carousel-img d-block w-100"
                      src={review.review_img}
                      alt={`Review by ${review.username}`}
                    />
                  ) : (
                    <div className="new-carousel-placeholder">
                      <h3>No Image Available</h3>
                    </div>
                  )}
                  <Carousel.Caption>
                    <h4>Username: {review.username}</h4>
                    <h4>Review: {review.review}</h4>
                    <h4>Rating: {review.rating}</h4>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <h3>No reviews available</h3>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </Container>

      <Container className="new-form-container">
        <div className="new-form-wrapper row">
          {/* Left side with image */}
          <div className="col-md-6 video-container">
            <video
              className="d-block w-100 video"
              src="assets/videos/video3.mp4"
              alt="First slide"
              height={400}
              autoPlay
              loop
              muted
            />
          </div>

          {/* Right side with form */}
          <div className="col-md-6">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="newFormBasicUsername">
                <Form.Label>Username*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="newFormBasicReview">
                <Form.Label>Review*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write your review"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="newFormBasicRating">
                <Form.Label>Rating*</Form.Label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={30}
                      onClick={() => handleRatingChange(star)}
                      color={star <= formData.rating ? "#ffc107" : "#e4e5e9"}
                      className="star"
                    />
                  ))}
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="newFormBasicImage">
                <Form.Label>Upload Image*</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="new-submit-button d-flex justify-content-center mx-auto"
                style={{backgroundColor:"limegreen", border:"none",color:"white",height:"40px", alignItems:"center"}}
              >
                Submit Review
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Community;
