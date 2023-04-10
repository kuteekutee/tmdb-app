import { MovieRoutes } from "./routes/movieRoutes";
import Layout from "./layouts/Layout";
import "./App.css";
function App() {
  return (
    <>
      <Layout>
        <MovieRoutes />
      </Layout>
    </>
  );
}

export default App;
