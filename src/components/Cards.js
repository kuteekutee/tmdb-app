/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
// import noImage from "../assets/images/no-image.jpg";

const apiImage = `https://image.tmdb.org/t/p/w500/`;
export const Cards = ({ list, contentType }) => {
  return (
    <>
      <section className="section is-paddingless">
        <div className="container">
          <div className="columns is-multiline">
            {list.map((item) => (
              <div key={item.id} className="column is-one-third">
                <article className="media notification has-background-white">
                  <div className="media-content">
                    <div className="content">
                      <figure className="image">
                        <img
                          className="is-rounded"
                          src={`${apiImage}${item.poster_path}`}
                        />
                      </figure>
                      <p>
                        <Link
                          to={
                            contentType === "movie"
                              ? `/movie/${item.id}`
                              : `/tv/${item.id}`
                          }
                        >
                          <h1 className="title is-size-5">
                            {contentType === "movie" ? item.title : item.name}
                          </h1>
                        </Link>
                      </p>
                      <p className="subtitle is-size-6">
                        {contentType === "movie"
                          ? item.release_date
                          : item.first_air_date}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
