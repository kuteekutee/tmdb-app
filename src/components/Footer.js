//import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="has-text-centered mt-4">
      <div className="hero is-light pt-1 pb-0">
        <p>
          <strong>{process.env.REACT_APP_TITLE}</strong>
        </p>
        <small> NTU Software Engineering SCTP 2, Group 2 </small>
        <p>
          <a
            href="https://www.themoviedb.org/documentation/api/terms-of-use"
            target="_blank"
            rel="noreferrer"
          >
            <small>TMDB API Terms of Use</small>
          </a>
        </p>
        {/* <Link to="/about">About</Link> */}
      </div>
    </footer>
  );
};
