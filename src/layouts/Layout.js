import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <div className="container is-fullheight">
        <div className="columns is-multiline">
          <div className="column is-full is-paddingless">
            <Header />
          </div>
          <div className="column is-full mt-1">
            <div className="row">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
