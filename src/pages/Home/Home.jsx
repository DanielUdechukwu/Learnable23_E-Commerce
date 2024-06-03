import Nav from "../../components/nav/Nav";
import Hero1 from "../../assets/hero1.png";
import Hero2 from "../../assets/hero2.png";
import Hero3 from "../../assets/hero3.png";
import Hero4 from "../../assets/hero4.png";
import "./home.css";
import Bestseller from "../../components/bestseller/Bestseller";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="main-section">
        <div className="hero-grid">
          <div className="item1 items">
            <img src={Hero1} alt="" />
            <div className="card-content">
              <p className="grid-text-green">5 items</p>
              <h3 className="grid-tile-text">FURNITURE</h3>
              <p className="read-more-text">Read More</p>
            </div>
          </div>
          <div className="item2 items">
            <img src={Hero2} alt="" />
            <div className="card-content">
              <p className="grid-text-green">5 items</p>
              <h3 className="grid-tile-text">FURNITURE</h3>
              <p className="read-more-text">Read More</p>
            </div>
          </div>
          <div className="item3 items">
            <img src={Hero3} alt="" />
            <div className="card-content">
              <p className="grid-text-green">5 items</p>
              <h3 className="grid-tile-text">FURNITURE</h3>
              <p className="read-more-text">Read More</p>
            </div>
          </div>
          <div className="item4 items">
            <img src={Hero4} alt="" />
            <div className="card-content">
              <p className="grid-text-green">5 items</p>
              <h3 className="grid-tile-text">FURNITURE</h3>
              <p className="read-more-text">Read More</p>
            </div>
          </div>
        </div>
      </section>
      <Bestseller />
    </>
  );
};

export default Home;
