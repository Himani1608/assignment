import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            className="card-img"
            src="/image/bg.jpg"
            alt="Background"
            height="650px"
          />
          <div className="card-img-overlay d-flex mx-5">
            <div className="div">
              <h5 className="card-title display-3 mb-0 fw-bolder">
                Fashion Hub 
              </h5>
              <p className="card-text fs-3">Best Place to Find your Style</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
