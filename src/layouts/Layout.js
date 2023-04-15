import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const APP_TITLE = "The Movie Database";
function Layout({ children }) {
  return (
    <>
      <div className="container is-fullheight">
        <div className="columns is-multiline">
          <div className="column is-full  is-paddingless">
            <Header appTitle={APP_TITLE} />
          </div>
          <div className="column is-full is-paddingless">
            <div className="row">{children}</div>
          </div>
          <div className="column is-full is-paddingless">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
