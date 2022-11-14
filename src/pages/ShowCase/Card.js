import "./style.scss";
const Card = ({ icon, tag_1, tag_2 }) => {
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="avatar">
          <img src={icon} alt="k" />
        </div>
        <div className="punchline-box">
          <h1>{tag_1}</h1>
          <h1>{tag_2}</h1>
        </div>

      </div>
    </div>
  );
};

export default Card;
