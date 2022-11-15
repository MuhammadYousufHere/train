import "./Flow.scss";
import st from "../../assets/stre.png";
const Flow = ({ data }) => {
  return (
    <div className='flow-container'>
      {data.map((item, idx) => {
        return (
          <div key={item.id || idx} className='jumbo'>
            <main className='flow-content' key={item.id || idx}>
              <div className='left'>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
              <div className='right'>
                <div className='icon-card'>
                  <figure>
                    <img src={item.url} alt='g' />
                  </figure>
                </div>
              </div>
            </main>
            <div className='stare'>
              <figure>
                <img src={st} alt='' />
              </figure>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Flow;
