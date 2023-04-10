/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const apiImage = `https://image.tmdb.org/t/p/w500/`;
export const Cards = ({ list }) => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {list.map((item) => (
              <div key={item.id} className="column is-one-third">
                <article className="media notification has-background-white">
                  <figure className="media-left">
                    <span className="icon">
                      <i className="fas fa-solid fa-film fa-2x"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <figure className="image">
                        <img
                          className="is-rounded"
                          src={`${apiImage}${item.poster_path}`}
                        />
                      </figure>
                      <h1 className="title is-size-4">
                        {item.title || item.name}
                      </h1>
                      <p className="subtitle is-size-6">{item.overview}</p>
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
