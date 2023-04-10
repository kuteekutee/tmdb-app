// import Logo from "../assets/images/logo.png";
import NavBar from "../nav/NavBar";
import "./Header.css";

export const Header = ({ appTitle }) => {
  return (
    <>
      <div className="headerContainer">
        <h2>{appTitle}</h2>
        <NavBar />
      </div>
    </>
    // <section class="hero is-small is-primary">
    //   <div class="hero-body">
    //     <div className="container">
    //       <div className="columns">
    //         <div className="column is-one-quarter">
    //           <figure className="media-right image">
    //             <img src={Logo} alt="logo" className="logo" />
    //           </figure>
    //         </div>
    //         <div className="column is-one-quarter">
    //           <div className="block">
    //             <p className="title">{appTitle}</p>
    //             <p className="subtitle">An adaptation</p>
    //           </div>
    //         </div>
    //         <div className="column">{/* <NavBar /> */}</div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
