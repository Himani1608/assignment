import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();

  const productId = params.productId;
  const [state, setState] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log(response);
        setState(response.data);
        setLoading(false);
      });
  }, []);

  const handleButtonClick = () => {
    navigate("/user");
  };

  return (
    <div>
      <Navbar />
      <button onClick={handleButtonClick}>Go to user Page</button>
      <p>Product Page</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="col-md-4 mb-4 mt-3">
            <div className="card h-100 text-center p-4" key={state.id}>
            {state && <img
                className="card-img-top"
                src={state.category.image}
                alt={state.title}
                height="300px"
                width="200px"
               />}
              <div className="card-body">
                <h3 className="card-title mb-0 mt-2">{state && state.title}</h3>
                <p className="card-text mt-2 fw-bolder">₹ {state && state.price}</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          {/* {state && <img src={state.image} alt={state.title} />}
                    <h1>{state && state.title}</h1>
                    <p>{state && state.title}</p> */}
        </>
      )}
    </div>
  );
}

export default ProductPage;
