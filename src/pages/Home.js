import { Outlet } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="container hero is-fullheight">
        <Outlet />
      </div>
    </>
  );
};
