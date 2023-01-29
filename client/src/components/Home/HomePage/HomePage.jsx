import xbox from "../../../images/carousel/xbox.jpg";
import iphone from "../../../images/carousel/iphone.jpg";
import classes from "./homepage.module.css";
import psvr2 from "../../../images/carousel/psvr2.jpg";
import forspoken from "../../../images/carousel/forspoken.jpg";

const HomePage = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div>
            <div className={classes.carouselImgContainer}>
              <img src={forspoken} className="w-100" alt="forspoken banner" />
              <span className={classes.carouselTextLeft}>FIND YOUR FIGHT</span>
            </div>
          </div>
        </div>
        <CarouselImg src={xbox} alt="xbox banner" />
        <CarouselImg src={psvr2} alt="psvr2 banner" />
        <CarouselImg src={iphone} alt="iphone banner" />
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const CarouselImg = ({ src, alt }) => (
  <div className="carousel-item">
    <div>
      <img src={src} className="w-100" alt={alt} />
    </div>
  </div>
);

export default HomePage;
