import { Link } from "react-router-dom";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import shuffle from "../playerbuttons/Shuffle.png";
import previous from "../playerbuttons/Previous.png";
import play from "../playerbuttons/Play.png";
import next from "../playerbuttons/Next.png";
import repeat from "../playerbuttons/Repeat.png";

const MyPlayer = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={{ span: 10, offset: 2 }}>
          <Row>
            <Col
              xs={{ span: 6, offset: 3 }}
              md={{ span: 4, offset: 4 }}
              lg={{ span: 2, offset: 5 }}
              className="playerControls mt-1"
            >
              <Row>
                <Col>
                  <Link to="/">
                    <Image src={shuffle} alt="shuffle" />
                  </Link>
                </Col>
                <Col>
                  <Link to="/">
                    <Image src={previous} alt="previous" />
                  </Link>
                </Col>
                <Col>
                  <Link to="/">
                    <Image src={play} alt="play" />
                  </Link>
                </Col>
                <Col>
                  <Link to="/">
                    <Image src={next} alt="next" />
                  </Link>
                </Col>
                <Col>
                  <Link to="/">
                    <Image src={repeat} alt="repeat" />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <ProgressBar now={0} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPlayer;
