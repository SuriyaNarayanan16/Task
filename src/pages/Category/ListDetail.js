import { useEffect, useState } from "react";
import { BreadCrumbs } from "../../components/Breadcrumbs";
import { useGlobalContext } from "../../globalContext/GlobalContext";
import { useParams } from "react-router-dom";
import { StaticContent } from "../../helpers/helpers";

export const ListDetail = () => {
  const { categories, IncrementCart, DecrementCart, cart } = useGlobalContext();
  const { category_id, item_id } = useParams();

  const [category, setCategory] = useState({});
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    if (category_id) {
      setCategory(categories.find((x) => x.id === category_id));
    }
  }, [category_id]);

  useEffect(() => {
    if (Object.keys(category).length > 0 && item_id) {
      let item = cart.find((x) => x.id === item_id);
      if (item) {
        setCurrentItem(item);
      } else {
        setCurrentItem(category.list_items.find((x) => x.id === item_id));
      }
    }
  }, [category, item_id]);

  const IncrementCount = () => {
    let data = structuredClone(currentItem);
    data.count += 1;
    setCurrentItem({ ...currentItem, count: currentItem.count + 1 });
    IncrementCart(currentItem.id, data);
  };

  const DecrementCount = () => {
    let data = structuredClone(currentItem);
    data.count -= 1;
    DecrementCart(currentItem.id, data);
    setCurrentItem({ ...currentItem, count: currentItem.count - 1 });
  };

  return (
    <div>
      <div className="mb_20">
        <BreadCrumbs
          navigation={[
            {
              route: `/categories/${category_id}`,
              text: `${category?.name}`,
            },
            {
              route: `/categories/${category_id}/${item_id}`,
              text: `${currentItem?.name}`,
              current: true,
            },
          ]}
        />
      </div>
      <div className="list-detail-parent">
        <div className="child child-1">
          <img src={currentItem?.image} />
        </div>
        <div className="child child-2">
          <p className="primary_text_color ft_14 mt_0 ft_600">
            {currentItem?.name}
          </p>
          <p className="detail-description ft_14">{StaticContent}</p>
          <div className="individual-action w_48">
            {currentItem.count === 0 ? (
              <>
                <button
                  className="add-to-cart"
                  onClick={() => {
                    IncrementCount();
                  }}
                >
                  Add to Cart
                </button>
              </>
            ) : (
              <div className="action-div">
                <button
                  className="action-button"
                  onClick={() => {
                    DecrementCount();
                  }}
                >
                  -
                </button>
                {currentItem.count}
                <button
                  className="action-button"
                  onClick={() => {
                    IncrementCount();
                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
