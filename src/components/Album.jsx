import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import MyPlayer from "./MyPlayer";
import ContentAlbum from "./ContentAlbum"

const Album = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <ContentAlbum/>
      </Row>
      <MyPlayer />
    </Container>
  );
};

export default Album;
