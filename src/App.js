import { MovieRoutes } from "./routes/MovieRoutes";
import Layout from "./layouts/Layout";
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
