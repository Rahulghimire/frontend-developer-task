import React from "react";
import Card from "react-bootstrap/Card";
import dogImage from "../assets/dog-img.jfif";
import img1 from "../assets/img1.svg";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.svg";

import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img5 from "../assets/image-5.png";

const Services = () => {
  return (
    <div className="services">
      <div>
        <p className="services_header">Our Services</p>
        <span className="services_para">
          We provide a wide range of products & services for pets such as food,
          toys, grooming supplies, and veterinary care. We aim to meet the needs
          of pet owners and ensure the health and happiness of their furry
          friends.
        </span>
      </div>
      <div className="services-card d-flex flex-row flex-wrap justify-content-center">
        <Card style={{ width: "33.4rem" }} className="card">
          <Card.Img variant="top" src={img1} />
          <Card.Body className="card_body">
            <Card.Title className="card_title">Dog/Cat Grooming</Card.Title>
            <Card.Text className="card_text">
              We are enhancing our skills, salon, and equipment to meet the
              challenges of pet grooming.
            </Card.Text>
            <div className="text-center">
              <button className="btn-viewmore">View More</button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "33.4rem" }} className="card">
          <Card.Img variant="top" src={image2} />
          <Card.Body className="card_body">
            <Card.Title className="card_title">Home Treatment</Card.Title>
            <Card.Text className="card_text">
              Our goal is to ensure pet welfare through home treatment and
              prompt client response.
            </Card.Text>
            <div className="text-center">
              <button className="btn-viewmore">View More</button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "33.4rem" }} className="card">
          <Card.Img variant="top" src={image3} />
          <Card.Body className="card_body">
            <Card.Title className="card_title">Clinical Treatment</Card.Title>
            <Card.Text className="card_text">
              Our clinic offers professional veterinary care with a focus on
              disease prevention, diagnosis, and treatment.{" "}
            </Card.Text>
            <div className="text-center">
              <button className="btn-viewmore">View More</button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "33.4rem" }} className="card">
          <Card.Img variant="top" src={img3} />
          <Card.Body className="card_body">
            <Card.Title className="card_title">
              Puppies Buying & Selling
            </Card.Title>
            <Card.Text className="card_text">
              We buy and sell common breed puppies like Golden Retriever, Husky,
              Pug, etc. 100% guarantee on the breed offered.
            </Card.Text>
            <div className="text-center">
              <button className="btn-viewmore">View More</button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "33.4rem" }} className="card">
          <Card.Img variant="top" src={img5} />
          <Card.Body className="card_body">
            <Card.Title className="card_title">Dog Training</Card.Title>
            <Card.Text className="card_text">
              Our team of dog trainers is passionate, dedicated, and has years
              of professional experience.
            </Card.Text>
            <div className="text-center">
              <button className="btn-viewmore">View More</button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "33.4rem" }} className="card">
          <Card.Img variant="top" src={img2} />
          <Card.Body className="card_body">
            <Card.Title className="card_title">Dog Matting</Card.Title>
            <Card.Text className="card_text">
              Quality breeding requires experience and passion. We can arrange
              and facilitate quality breed mating.
            </Card.Text>
            <div className="text-center">
              <button className="btn-viewmore">View More</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;
