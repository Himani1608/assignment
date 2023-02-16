import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart";
// import { GlobalContext } from "../contexts/GlobalContext";

function Product({ productObj }) {
    const dispatch = useDispatch();
    // const { cart, setCart } = useContext(GlobalContext);

    // with redux
    const handleAddToCart = () => {
        dispatch(addToCart(productObj));
    }

    // with context
    // const handleAddToCart = () => {
    //     let updatedCart = [...cart];

    //     let productIndex = updatedCart.findIndex(
    //         (curProduct) => curProduct.id === productObj.id
    //     );
    //     if (productIndex !== -1) {
    //         // if we have the product inside the cart already
    //         updatedCart[productIndex].qty++;
    //     } else {
    //         // if we don't have the product in the cart
    //         const obj = { ...productObj, qty: 1 };
    //         updatedCart.push(obj);
    //     }

    //     setCart(updatedCart);
    // }

    return (
        <div style={{ width: "150px", border: "1px solid black"}}>
            <Link to={`/products/${productObj.id}`}>
                <div style={{ height: "300px", overflow: "hidden"  }}>
                    <img src={productObj.image} width="100px" height="100px" />
                    <h3>{productObj.title}</h3>
                    <p>{productObj.description}</p>
                </div>
            </Link>
            <button 
                style={{ marginTop: "20px", marginBottom: "20px" }}
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Product;
