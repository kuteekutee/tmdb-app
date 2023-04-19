export const Home = () => {
  const listItems = [
    "/vkLzXddgUKH5VcpnYiRzpJFrZhz.jpg",
    "7TCwgX7oQKxcWYEhSPRmaHe6ULN.jpg",
    "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
    "/3GrRgt6CiLIUXUtoktcv1g2iwT5.jpg",
    "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    "/evu5aDitRLTPhVc9d0imll4kfti.jpg",
    "/4b4v7RnPhNyPEaVGFarEuo74r8W.jpg",
    "/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg",
    "/cOaQU5o7mznZTFb4Xs9c1QlwTze.jpg",
    "/dRVAlaU0vbG6hMf2K45NSiIyoUe.jpg",
    "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "/ptMxe9xl7RZcQQR2NwwoaOyVgdZ.jpg",
    "/9yMQxHIQERFxNPnbbhxOO8nqVdq.jpg",
    "/rFp74PFpz14AHrtlVPrLyrSng47.jpg",
    "/cxSKca4dNlk7O7PMiEYT203vlIw.jpg",
  ];
  const item = listItems[Math.floor(Math.random() * listItems.length)];
  const image = "https://image.tmdb.org/t/p/w500/" + item;
  return (
    <>
      <div className="container is-fullheight has-text-centered">
        <div className="columns is-vcentered">
          <div className="column">
            <figure className="image">
              <img src={image} alt="Description" />
            </figure>
          </div>
          <div className="column">
            <h1 className="title is-4">
              Welcome to {process.env.REACT_APP_TITLE}
            </h1>
            <h2 className="subtitle is-6">A mockapi using TMDB's api</h2>
            <br />
            <p>
              We hope this simple site demonstrates the power of comsuming
              external api(s).{" "}
            </p>
            <br />
            <p>
              TMDB api is rich in features and is comprehensive in the way it
              exposes information about movies, tv shows, what's trending by day
              or week ...
            </p>
            <br />
            <p>Enjoy!</p>
            <br />
            <p className="has-text-centered">
              <a href="/all/trending" className="button is-medium is-ghost">
                See what is trending?
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
