import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import MyPlayer from "./MyPlayer";
import Main from "./Main";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={12}>
          <Main />
        </Col>
      </Row>
      <MyPlayer />
    </Container>
  );
};

export default Home;
