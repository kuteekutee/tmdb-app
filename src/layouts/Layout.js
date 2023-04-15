import { Footer } from "../components/Footer";
//import { Header } from "../components/Header";
import MyNavbar from "../nav/NavBar";

// const APP_TITLE = "The Movie Database";
function Layout({ children }) {
  return (
    <>
      <div className="container is-fullheight">
        <div className="columns is-multiline">
          <div className="column is-full  is-paddingless">
            {/* <Header appTitle={APP_TITLE} /> */}
          </div>
          <MyNavbar />
          <div className="column is-full mt-6">
            <div className="row">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
