import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../assets/img1.svg";
import breed1 from "../assets/breed-img1.png";
import btnArrow from "../assets/btn-arrow.svg";
const Breeds = () => {
  return (
    <div className="breeds">
      <div>
        <div>
          <p className="breeds_header">Our Pet Collections</p>
          <p className="breeds_para">
            "Bring joy to your home with a furry companion from our pet
            selection."
          </p>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center breeds-card-container">
        <Card style={{ width: "28rem" }} className="breeds_card img-fluid ">
          <div className="breeds_image ">
            <Card.Img variant="top" src={breed1} />
          </div>
          <Card.Body className="breeds_card_body">
            <Card.Title className="breeds_card_title">
              Golden Retriever
            </Card.Title>
            <Card.Text className="breeds_card_text pt-1">
              <div className="d-flex justify-content-between">
                <span className="breeds_gender">
                  Gender: <span className="breeds_gender-value">Male</span>
                </span>
                <span className="breeds_gender">
                  Age: <span className="breeds_gender-value">2 months</span>
                </span>
                <p></p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }} className="breeds_card img-fluid ">
          <div className="breeds_image ">
            <Card.Img variant="top" src={breed1} />
          </div>
          <Card.Body className="breeds_card_body">
            <Card.Title className="breeds_card_title">
              Golden Retriever
            </Card.Title>
            <Card.Text className="breeds_card_text pt-1">
              <div className="d-flex justify-content-between">
                <span className="breeds_gender">
                  Gender: <span className="breeds_gender-value">Male</span>
                </span>
                <span className="breeds_gender">
                  Age: <span className="breeds_gender-value">2 months</span>
                </span>
                <p></p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }} className="breeds_card img-fluid ">
          <div className="breeds_image ">
            <Card.Img variant="top" src={breed1} />
          </div>
          <Card.Body className="breeds_card_body">
            <Card.Title className="breeds_card_title">
              Golden Retriever
            </Card.Title>
            <Card.Text className="breeds_card_text pt-1">
              <div className="d-flex justify-content-between">
                <span className="breeds_gender">
                  Gender: <span className="breeds_gender-value">Male</span>
                </span>
                <span className="breeds_gender">
                  Age: <span className="breeds_gender-value">2 months</span>
                </span>
                <p></p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }} className="breeds_card img-fluid ">
          <div className="breeds_image ">
            <Card.Img variant="top" src={breed1} />
          </div>
          <Card.Body className="breeds_card_body">
            <Card.Title className="breeds_card_title">
              Golden Retriever
            </Card.Title>
            <Card.Text className="breeds_card_text pt-1">
              <div className="d-flex justify-content-between">
                <span className="breeds_gender">
                  Gender: <span className="breeds_gender-value">Male</span>
                </span>
                <span className="breeds_gender">
                  Age: <span className="breeds_gender-value">2 months</span>
                </span>
                <p></p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }} className="breeds_card img-fluid ">
          <div className="breeds_image ">
            <Card.Img variant="top" src={breed1} />
          </div>
          <Card.Body className="breeds_card_body">
            <Card.Title className="breeds_card_title">
              Golden Retriever
            </Card.Title>
            <Card.Text className="breeds_card_text pt-1">
              <div className="d-flex justify-content-between">
                <span className="breeds_gender">
                  Gender: <span className="breeds_gender-value">Male</span>
                </span>
                <span className="breeds_gender">
                  Age: <span className="breeds_gender-value">2 months</span>
                </span>
                <p></p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }} className="breeds_card img-fluid ">
          <div className="breeds_image ">
            <Card.Img variant="top" src={breed1} />
          </div>
          <Card.Body className="breeds_card_body">
            <Card.Title className="breeds_card_title">
              Golden Retriever
            </Card.Title>
            <Card.Text className="breeds_card_text pt-1">
              <div className="d-flex justify-content-between">
                <span className="breeds_gender">
                  Gender: <span className="breeds_gender-value">Male</span>
                </span>
                <span className="breeds_gender">
                  Age: <span className="breeds_gender-value">2 months</span>
                </span>
                <p></p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center pb-0">
        <button type="button" className="view-all-btn">
          View All <img src={btnArrow} alt="btnarrow" className="ps-5" />
        </button>
      </div>
    </div>
  );
};

export default Breeds;
