import { useGlobalContext } from "../globalContext/GlobalContext";
import websiteLogo from "../Icons/websiteLogo.svg";
import settings from "../Icons/settings.svg";
import cartIcon from "../Icons/cart.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { cart } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <>
      <div className="header-parent">
        <div className="header-content">
          <img
            className="cursor_pointer"
            onClick={() => {
              navigate("/categories");
            }}
            src={websiteLogo}
          />
          <div className="header-actions">
            <div
              className="card-div cursor_pointer"
              onClick={() => {
                navigate("/cart");
              }}
            >
              {cart?.length > 0 && (
                <span className="cart-number">{cart.length}</span>
              )}

              <img className="cursor_pointer" src={cartIcon} />
            </div>
            <img className="cursor_pointer" src={settings} />
          </div>
        </div>
      </div>
    </>
  );
};
