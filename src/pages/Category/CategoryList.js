import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../globalContext/GlobalContext";
import { BreadCrumbs } from "../../components/Breadcrumbs";
import { spliceData } from "../../helpers/helpers";

export const CategoryList = () => {
  const { category_id } = useParams();
  const [listItem, setListItem] = useState();
  const navigate = useNavigate();

  const { categories, IncrementCart, DecrementCart, cart } = useGlobalContext();

  // matching the list with respect to the cart
  useEffect(() => {
    if (category_id) {
      //getting  specific category

      let specificCategory = categories.find((x) => x.id === category_id);

      specificCategory?.list_items?.map((item) => {
        let cartItem = cart.find((x) => x.id === item.id);
        cartItem ? (item.count = cartItem.count) : (item.count = 0);
      });
      setListItem({ ...specificCategory });
    }
  }, [category_id]);

  const AddToCard = (item) => {
    item.count += 1;
    setListItem({ ...listItem });
    IncrementCart(item.id, item);
  };

  const IncrementCount = (item) => {
    item.count += 1;
    setListItem({ ...listItem });
    IncrementCart(item.id, item);
  };

  const DecrementCount = (item) => {
    item.count -= 1;
    setListItem({ ...listItem });
    DecrementCart(item.id, item);
  };

  return (
    <div>
      <div className="mb_20">
        <BreadCrumbs
          navigation={[
            { route: "/categories", text: "Categories" },
            {
              route: `/categories/${category_id}`,
              text: `${listItem && listItem?.name}`,
              current: true,
            },
          ]}
        />
      </div>
      <div className="categories-parent-item">
        {listItem?.list_items?.length > 0 &&
          listItem?.list_items.map((item, i) => (
            <div className="individual-item">
              <div
                className="image-container"
                onClick={() => {
                  navigate(`/categories/${category_id}/${item.id}`);
                }}
              >
                <img src={item?.image} />
              </div>
              <div
                className="item-detail"
                onClick={() => {
                  navigate(`/categories/${category_id}/${item.id}`);
                }}
              >
                <p className="primary_text_color ft_14 ft_600">{item?.name}</p>
                <p className="primary_text_color ft_14 ft_600">
                  ₹ {item?.amount}
                </p>
              </div>
              <div className="individual-action">
                {item.count === 0 ? (
                  <>
                    <button
                      className="add-to-cart"
                      onClick={() => {
                        AddToCard(item);
                      }}
                    >
                      Add
                    </button>
                  </>
                ) : (
                  <div className="action-div">
                    <button
                      className="action-button"
                      onClick={() => {
                        DecrementCount(item, i);
                      }}
                    >
                      -
                    </button>
                    {item.count}
                    <button
                      className="action-button"
                      onClick={() => {
                        IncrementCount(item, i);
                      }}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
