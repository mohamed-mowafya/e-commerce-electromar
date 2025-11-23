import "../../Product/product_card.css";
import "../../../components/Reusable/reuse.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Card = (props) => {
  const authenticated = useSelector(({ user }) => user.authenticated);

  const buildImageUrl = (fileName) => {
    return `${process.env.REACT_APP_API_URL}file/${fileName}`;
  };

  const handleAddToCart = async () => {
    if (!authenticated)
      toast.error("You must be logged in to add items to cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    const productId = props.product._id;
    const quantity = 1; // To be changed when we add quantity input functionality.

    axios
      .post(
        `${process.env.REACT_APP_API_URL}cart`,
        { productId, quantity },
        { withCredentials: true }
      )
      .then(() => {
        toast.success("Item added from cart", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div className="card">
      <img
        crossOrigin="anonymous"
        className="card-img-top"
        src={buildImageUrl(props.product.image.fileName)}
        alt={props.product.name}
      />
      <div className="card-body">
        <p className="product-badge">NEW</p>
        <p className="product-price">{props.product.price}$</p>
        <p className="product-name">
          {props.product.name}
        </p>
        {props.product.description && !props.home && (
          <p className="product-description">
            {props.product.description}
          </p>
        )}
        <button
          onClick={handleAddToCart}
          type="button"
          className="add-to-cart-btn"
        >
          <i className="pi pi-shopping-cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
