import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { Categories } from "../pages/Category/Categories";
import { CategoryList } from "../pages/Category/CategoryList";
import { ListDetail } from "../pages/Category/ListDetail";
import { Cart } from "../pages/Cart/Cart";
import { Orders } from "../pages/Orders/Orders";

export const MainContent = () => {
  return (
    <div className="p_20">
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category_id" element={<CategoryList />} />
        <Route
          path="/categories/:category_id/:item_id"
          element={<ListDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />

        <Route path={"*"} element={<Navigate to="/categories" />} />
      </Routes>
    </div>
  );
};
