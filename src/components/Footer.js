import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container is-paddingless">
      <footer className="has-text-centered is-flex-align-items-flex-end mt-auto">
        <div className="hero is-info">
          <small>
            <span>
              NTU - SE - Cohort 2{" "}
              <a
                href="https://www.themoviedb.org/documentation/api/terms-of-use"
                target="_blank"
                rel="noreferrer"
              >
                (TMDB -Terms of use)
              </a>
            </span>
            <br />
          </small>
          <Link to="/about">About</Link>
        </div>
      </footer>
    </div>
  );
};
