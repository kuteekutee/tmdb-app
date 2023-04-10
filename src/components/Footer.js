import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>NTU - SE - Cohort 2 </strong> by{" "}
          <a
            href="https://www.themoviedb.org/documentation/api/terms-of-use"
            target="_blank"
            rel="noreferrer"
          >
            API Terms of Use
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
