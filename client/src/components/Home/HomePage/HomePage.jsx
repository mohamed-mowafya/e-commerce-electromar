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
              <img src={forspoken} className="w-100" alt="PS5" />
              <span className={classes.carouselTextLeft}>FIND YOUR FIGHT</span>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div>
            <img src={xbox} className="w-100" alt="PS5" />
          </div>
        </div>

        <div className="carousel-item w-100">
          <div>
            <img src={psvr2} className="w-100" alt="PS5" />
          </div>
        </div>
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

export default HomePage;
