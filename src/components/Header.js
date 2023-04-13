import NavBar from "../nav/NavBar";

export const Header = ({ appTitle }) => {
  return (
    <>
      <div className="hero is-small is-info">
        <div className="hero-body">
          <div className="content">
            <h2 className="title mt-4 mb-4">{appTitle}</h2>
          </div>
        </div>
        <NavBar />
      </div>
    </>
  );
};
