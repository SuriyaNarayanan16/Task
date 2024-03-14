import { useNavigate } from "react-router-dom";
import { BreadCrumbs } from "../../components/Breadcrumbs";
import { useGlobalContext } from "../../globalContext/GlobalContext";
import veg from "../../Icons/veg.svg";
import empty from "../../Icons/cartEmpty.avif";
import { useEffect } from "react";
export const Cart = () => {
  const navigate = useNavigate();

  const { cart, IncrementCart, DecrementCart, categories } = useGlobalContext();
  const getTotal = () => {
    let total = 0;
    cart.map((item) => (total += item.count * item.amount));
    return total;
  };

  //   useEffect(() => {}, []);

  return (
    <div>
      <div className="flex items-center mb_20 justify-between">
        <BreadCrumbs
          navigation={[
            {
              route: `/cart`,
              text: `Cart`,
              current: true,
            },
          ]}
        />
        {cart?.length > 0 && (
          <button className="add-to-cart" onClick={() => navigate("/orders")}>
            Place Order
          </button>
        )}
      </div>
      {cart?.length > 0 ? (
        <div className="cart-box">
          <div className="w_48 border_right p_15">
            <p className="primary_text_color ft_16 ft_600 mt_0 bill_heading">
              Cart Details
            </p>
            {cart.map((item, i) => (
              <div className="individual-cart-item mb_20">
                <div className="flex items-center">
                  {/* <img className="mr_15" src={veg} /> */}
                  <div>
                    {" "}
                    <p className="ft_14 mt_0  ft_500">{item.name}</p>
                    <p className="ft_14 m_0 ft_500">₹ &nbsp;{item.amount}</p>
                  </div>
                </div>
                <div className="cart-action-button">
                  <button
                    className="action-button"
                    onClick={() => {
                      item.count -= 1;
                      DecrementCart(item.id, item);
                    }}
                  >
                    -
                  </button>
                  <p className="m_0 ft_14 ft_600">{item.count}</p>

                  <button
                    className="action-button"
                    onClick={() => {
                      item.count += 1;
                      IncrementCart(item.id, item);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w_48  p_15">
            <p className="primary_text_color bill_heading ft_16 ft_600 mt_0">
              Bill Details
            </p>
            {cart.map((item) => (
              <div className="flex item-center mb_20 justify-between">
                <p className="m_0 ft_14 heading">{item.name}</p>
                <div className="ft_14 ft_500">
                  {item.count} x {item.amount} = &nbsp; ₹
                  {item.count * item.amount}
                </div>
              </div>
            ))}
            <div className="total_div ft_14 flex items-center justify-between">
              <p className="ft_500">To Pay</p>
              <p className="ft_600">₹ &nbsp;{getTotal()}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty_box">
          <div className="empty-image-container">
            <img src={empty} />
          </div>
          <p className="text_center ft_14 heading ">
            OOPS! Your Cart is Empty.
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={() => {
                navigate(`/categories`);
              }}
              className="add-to-cart text_center go_to_button"
            >
              Go to List
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
