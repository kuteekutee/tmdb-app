import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./Layout.css";
const APP_TITLE = "The Movie Database";
function Layout({ children }) {
  return (
    <>
      <div className="flex-wrapper">
        <Header appTitle={APP_TITLE} />
        <div className="layoutContainer">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
