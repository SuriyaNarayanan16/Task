import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../globalContext/GlobalContext";
import { BreadCrumbs } from "../../components/Breadcrumbs";
export const Categories = () => {
  const { categories } = useGlobalContext();

  return (
    <>
      <div>
        <h1 className="page-heading">Categories</h1>
        <div className="categories-parent">
          {categories.map((item, i) => (
            <Link key={i} className="normal_link" to={`/categories/${item.id}`}>
              <div className="individual-category-parent">
                <div className="individual-category-item">
                  <img src={item.image} />
                </div>
                <p className="category-name">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
