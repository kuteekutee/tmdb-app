const StarRating = ({ rating, votes }) => {
  if (!rating) return;
  const stars = Math.floor(rating);
  // const aStar = (
  //   <i key={} className="fa-solid fa-star fa-xs" style={{ color: "#f5e000" }}></i>
  // );

  let arrStars = [];
  for (let j = 1; j <= stars; j++) {
    arrStars.push(
      <span key={j}>
        <i className="fa-solid fa-star fa-xs" style={{ color: "#f5e000" }}></i>
      </span>
    );
  }

  return (
    <div className="container">
      {arrStars.map((item) => item)} {"  "}
      <span className="tag is-primary">{votes} votes</span>{" "}
    </div>
  );
};

export default StarRating;
