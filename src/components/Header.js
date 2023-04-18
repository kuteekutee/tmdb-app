import NavBar from "../nav/NavBar";

export const Header = ({ appTitle }) => {
  return (
    <>
      <div className="hero is-small is-white">
        <div className="hero-body">
          <NavBar />
        </div>
      </div>
    </>
  );
};
