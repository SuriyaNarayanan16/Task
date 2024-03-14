import { Link } from "react-router-dom";

export const BreadCrumbs = ({ navigation }) => {
  return (
    <div className="breadcrumbs-parent">
      <Link
        className="normal_link ft_600 primary_text_color"
        to={"/categories"}
      >
        Home
      </Link>
      <span className="home" style={{ display: "inline" }}>
        /
      </span>
      {navigation.length > 0 &&
        navigation?.map((link, i) => (
          <span key={i}>
            <Link
              className={`normal_link ft_600  ${
                link.current ? "active-link" : "primary_text_color"
              }`}
              to={link.route}
            >
              {link.text}
            </Link>
            {i !== navigation.length - 1 && (
              <span className="home" style={{ display: "inline" }}>
                /
              </span>
            )}
          </span>
        ))}
    </div>
  );
};
