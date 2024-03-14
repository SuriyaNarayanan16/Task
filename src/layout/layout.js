import { GlobalContext } from "../globalContext/GlobalContext";
import { MainContent } from "./MainContent";
import { Header } from "./header";
import { BrowserRouter as Router } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <div className="main-container">
        <Router>
          <GlobalContext>
            <Header />
            <MainContent />
          </GlobalContext>
        </Router>
      </div>
    </>
  );
};
