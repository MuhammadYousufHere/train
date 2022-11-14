import "./Partners.scss";

import data from "./data";
import Glide from "../../components/Glide/Glide";

const Partners = () => {
  return (
    <main className="partners-container">
      <div className="heading">
        <h1>These are the train operators</h1>
        <h1> we work with</h1>
      </div>
      <div className="slider-container">
        <div className="slider-body">
          <Glide
            settings={{
              glideToShow: 3,
              glideToScroll: 1,
              responsive: [
                {
                  breakpoint: 408,
                  settings: {
                    glideToShow: 1,
                    glideToScroll: 1,
                  },
                },
              ],
            }}
          >
            {data.map((item) => {
              return (
                <div
                  className="partner-card"
                  key={item.title}
                  style={{ textAlign: "center" }}
                >
                  <img src={item.imgSrc} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
          </Glide>
        </div>
      </div>
    </main>
  );
};

export default Partners;
