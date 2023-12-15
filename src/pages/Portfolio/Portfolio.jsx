import React from "react";
import "./portfolio.scss";
import IMG1 from "../../assets/gallery/1.jpg";
import IMG2 from "../../assets/gallery/2.jpg";
import IMG3 from "../../assets/gallery/3.jpg";
import IMG4 from "../../assets/gallery/4.jpg";
import IMG5 from "../../assets/gallery/5.jpg";
import IMG6 from "../../assets/gallery/6.jpg";
import IMG7 from "../../assets/gallery/7.jpg";
import IMG8 from "../../assets/gallery/8.jpg";
import IMG9 from "../../assets/gallery/9.jpg";
import IMG10 from "../../assets/gallery/10.jpg";
import IMG11 from "../../assets/gallery/11.jpg";
import IMG12 from "../../assets/gallery/12.jpg";

const Portfolio = () => {
  return (
    <section className="portfolio__root">
      <div className="portfolio__root__div">
        <h2>WHAT WE DO</h2>
        <div className="portfolio__image__gallery">
          <div class="gallery">
            <img src={IMG1} alt="a forest after an apocalypse" />
            <img src={IMG2} alt="a waterfall and many rocks" />
            <img src={IMG3} alt="a house on a mountain" />
            <img src={IMG4} alt="big rocks with some trees" />
            <img src={IMG5} alt="a waterfall, a lot of tree" />
            <img src={IMG6} alt="a cool landscape" />
            <img src={IMG7} alt="inside a town between two big buildings" />
            <img src={IMG8} alt="a great view of the sea above the mountain" />
            <img src={IMG9} alt="a great view of the sea above the mountain" />
            <img src={IMG10} alt="a great view of the sea above the mountain" />
            <img src={IMG11} alt="a great view of the sea above the mountain" />
            <img src={IMG12} alt="sime pink flowers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
