import "./Hero.scss";
const Hero = ({ title, desc, children }) => {
  return (
    <div className='hero__container'>
      <div className='hero__content'>
        <div className='left'>
          <h1>{title}</h1>
          <h2>{desc}</h2>
        </div>
        <div className='right'>{children}</div>
      </div>
    </div>
  );
};

export default Hero;
