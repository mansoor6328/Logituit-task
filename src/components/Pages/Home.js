/* eslint-disable jsx-a11y/alt-text */
import MotionHoc from "./MotionHoc";
import first from "./Images/first.jpg";
import second from "./Images/second.jpg";
import third from "./Images/third.jpg";
import fourth from "./Images/fourth.jpg";
import fifth from "./Images/fifth.jpg";
import sixth from "./Images/sixth.jpg";
import seventh from "./Images/seventh.jpg";
import Carousel from "react-elastic-carousel";
import "./Home.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function HomeComponent() {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1> */}
      <div className="HomeApp">
        <Carousel breakPoints={breakPoints}>
          <div className="img">
            <img src={first}></img>
          </div>
          <div className="img">
            <img src={second}></img>
          </div>
          <div className="img">
            <img src={third}></img>
          </div>
          <div className="img">
            <img src={fourth}></img>
          </div>
          <div className="img">
            <img src={fifth}></img>
          </div>
          <div className="img">
            <img src={sixth}></img>
          </div>
          <div className="img">
            <img src={seventh}></img>
          </div>
        </Carousel>
      </div>
    </>
  );
}

const Home = MotionHoc(HomeComponent);

export default Home;
