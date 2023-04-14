mport { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import MyPlayer from "./MyPlayer";
import ContentArtist from "./ContentArtist"

const Artist = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <ContentArtist/>
        </Col>
      </Row>
      <MyPlayer />
    </Container>
  );
};

export default Artist;