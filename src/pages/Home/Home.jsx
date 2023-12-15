import React from "react";
import "./home.scss";
import VIDEO from "../../assets/landing-page-480p.mp4";
import LOGO from "../../assets/logo.png";
import Portfolio from "../Portfolio/Portfolio";
const Home = () => {
  return (
    <>
      <section className="home__landing__section">
        <video autoPlay loop muted className="background__video">
          <source src={VIDEO} type="video/mp4" />
        </video>

        <div class="home__landing__content">
          <div class="home__landing__content__inner">
            <img
              src={
                LOGO
                  ? LOGO
                  : "https://www.blackticketfilms.com/wp-content/themes/btf/images/logo.png"
              }
              alt="logo"
            />
            <div class="home__landing__content__inner__container">
              <h1>WE TELL STORIES</h1>

              <p>
                Black Ticket Films is an Academy Award nominated film production
                company that is invested in the power of storytelling.
              </p>

              <p>
                While we are recognized for our unique cinematic language, our
                goal is to bring powerful techniques of telling a story visually
                to create delightful,
                <br /> memorable narratives that resonate deeply with viewers
                across the globe.
              </p>
              <p>Come, share your story with us, as we share ours with you!</p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />
    </>
  );
};

export default Home;
