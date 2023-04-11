import { Outlet } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
