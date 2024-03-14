import { useEffect } from "react";
import { BreadCrumbs } from "../../components/Breadcrumbs";
import { useGlobalContext } from "../../globalContext/GlobalContext";
import { generateId, generateRandomId } from "../../helpers/helpers";

export const Orders = () => {
  const { cart } = useGlobalContext();

  const getTotal = () => {
    let total = 0;
    cart.map((item) => {
      total += item.count * item.amount;
    });
    return total;
  };

  return (
    <div>
      <div className="mb_20">
        <BreadCrumbs
          navigation={[
            {
              route: `/orders`,
              text: `Orders`,
              current: true,
            },
          ]}
        />
      </div>
      <div className="card_box w_50 p_20">
        <p className="success">Yay !! Your Order Has Been Placed</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="m_0 ft_14 ft_600">Order ID: </p>
            <p className="m_0 ft_14 ft_600">&nbsp; #{generateId(7)}</p>
          </div>
          <div className="flex items-center">
            <p className="m_0 ft_14 ft_600">Total :&nbsp;</p>
            <p className="ft_600 m_0 ft_14">₹&nbsp;{getTotal()} /-</p>
          </div>
        </div>
        {cart?.map((item) => (
          <div className="individual-orders">
            <div className="flex items-start">
              <img className="order_image" src={item.image} />
              <div className="">
                <p className="ft_14 m_0 ft_600">{item.name}</p>
                <p className="ft_13 mt_10 mb_0">₹ {item.amount}</p>
              </div>
            </div>
            <div className="ft_14 ft_500">
              {item.count} x {item.amount} = &nbsp; ₹{item.count * item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
