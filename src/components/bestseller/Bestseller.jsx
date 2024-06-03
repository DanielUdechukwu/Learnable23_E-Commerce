import "./bestseller.css";
import Best1 from "../../assets/best1.png";

const Bestseller = () => {
  return (
    <>
      <div className="bestseller">
        <div className="bestseller-header">
          <h3>Festured Products</h3>
          <h2>BESTSELLER PRODUCTS</h2>
          <p>Problems trying to resolve the conflicts between</p>
        </div>

        <section className="cards">
          <div className="cards-container">
            <div className="card">
              <div className="product-image">
                <img src={Best1} alt="" />
              </div>
              <p>Graphic Design</p>
              <p>English Department</p>
              <p>
                $16.48 <span>$6.48</span>
              </p>
            </div>
            <div className="card">
              <div className="product-image">
                <img src={Best1} alt="" />
              </div>
              <p>Graphic Design</p>
              <p>English Department</p>
              <p>
                $16.48 <span>$6.48</span>
              </p>
            </div>
            <div className="card">
              <div className="product-image">
                <img src={Best1} alt="" />
              </div>
              <p>Graphic Design</p>
              <p>English Department</p>
              <p>
                $16.48 <span>$6.48</span>
              </p>
            </div>
            <div className="card">
              <div className="product-image">
                <img src={Best1} alt="" />
              </div>
              <p>Graphic Design</p>
              <p>English Department</p>
              <p>
                $16.48 <span>$6.48</span>
              </p>
            </div>
            <div className="card">
              <div className="product-image">
                <img src={Best1} alt="" />
              </div>
              <p>Graphic Design</p>
              <p>English Department</p>
              <p>
                $16.48 <span>$6.48</span>
              </p>
            </div>
          </div>
          <div>
            <button>LOAD MORE PRODUCTS</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bestseller;
