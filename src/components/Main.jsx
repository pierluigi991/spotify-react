import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyTracks from "./MyTracks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHipHopAction, getPopAction, getRockAction, getSearchMusicAction } from "../redux/actions";

const Main = () => {
  const rockEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock%20classics";
  const popEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=pop%20culture";
  const hipHopEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=hip%20hop";
  const query = useSelector((state) => state.home.query);
  const searchEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockAction(rockEndpoint));
    dispatch(getPopAction(popEndpoint));
    dispatch(getHipHopAction(hipHopEndpoint));
    if (query !== "") {
      dispatch(getSearchMusicAction(searchEndpoint));
    }
  }, [query]);
  const rockMusic = useSelector((state) => state.home.rock);
  const popMusic = useSelector((state) => state.home.pop);
  const hipHopMusic = useSelector((state) => state.home.hiphop);
  const searchMusic = useSelector((state) => state.home.search);

  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" />
            {searchMusic.length > 0 && (
              <>
                {searchMusic.map((song) => (
                  <Col key={song.id} className="text-center" id="id">
                    <MyTracks song={song} />
                  </Col>
                ))}
              </>
            )}
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection" />
            {rockMusic.length > 0 && (
              <>
                {rockMusic.slice(0, 4).map((song) => (
                  <Col key={song.id} className="text-center" id="id">
                    <MyTracks song={song} />
                  </Col>
                ))}
              </>
            )}
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection" />
            {popMusic.length > 0 && (
              <>
                {popMusic.slice(0, 4).map((song) => (
                  <Col key={song.id} className="text-center" id="id">
                    <MyTracks song={song} />
                  </Col>
                ))}
              </>
            )}
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection" />
            {hipHopMusic.length > 0 && (
              <>
                {hipHopMusic.slice(0, 4).map((song) => (
                  <Col key={song.id} className="text-center" id="id">
                    <MyTracks song={song} />
                  </Col>
                ))}
              </>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Main;
