import React from "react";
import blogImg from "../assets/blog-img.png";
import Card from "react-bootstrap/Card";

const Blog = () => {
  return (
    <div className="blogs">
      <div>
        <p className="blogs_header">Our Blogs</p>
      </div>
      <div className="blogs-card d-flex flex-row flex-wrap justify-content-center">
        <Card style={{ width: "35rem" }} className="blog_card">
          <Card.Img variant="top" src={blogImg} className="blog_image" />
          <Card.Body className="blog_card_body">
            <Card.Title className="blog_card_title m-0">
              How to Choose the Right Bully Stick for Your Dog
            </Card.Title>
            <Card.Text className="blog_card_text m-0">
              Below is an excerpt of porch.com article “ Moving with Pets? We
              have the Experts advice to do it Properly.
            </Card.Text>
            <div>
              <button className="btn-viewmore mb-0">View Details</button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "35rem" }} className="blog_card">
          <Card.Img variant="top" src={blogImg} className="blog_image" />
          <Card.Body className="blog_card_body">
            <Card.Title className="blog_card_title m-0">
              How to Choose the Right Bully Stick for Your Dog
            </Card.Title>
            <Card.Text className="blog_card_text m-0">
              Below is an excerpt of porch.com article “ Moving with Pets? We
              have the Experts advice to do it Properly.
            </Card.Text>
            <div>
              <button className="btn-viewmore mb-0">View Details</button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "35rem" }} className="blog_card">
          <Card.Img variant="top" src={blogImg} className="blog_image" />
          <Card.Body className="blog_card_body">
            <Card.Title className="blog_card_title m-0">
              How to Choose the Right Bully Stick for Your Dog
            </Card.Title>
            <Card.Text className="blog_card_text m-0">
              Below is an excerpt of porch.com article “ Moving with Pets? We
              have the Experts advice to do it Properly.
            </Card.Text>
            <div>
              <button className="btn-viewmore mb-0">View Details</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
