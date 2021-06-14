import Marquee from "react-fast-marquee";

export const Mindset = () => (
  <div className="mindset">
    <Marquee gradient={false}>
      <div className="phrase">
        SOMOS LO QUE VESTIMOS CUANDO EXTERIORIZAMOS IDEAS POR MEDIO DE LO QUE
        USAMOS
      </div>
      <div className="space">.</div>
      <div className="phrase">
        SOMOS LO QUE VESTIMOS CUANDO EXTERIORIZAMOS IDEAS POR MEDIO DE LO QUE
        USAMOS
      </div>
      <div className="space">.</div>

      
    </Marquee>
    <style jsx>
      {`
        .space {
          text-align: center;
          min-width: 80px;
        }

        .mindset {
          padding: 5rem 0rem;
          white-space: nowrap;
          display: flex;
          overflow: hidden;
        }
        .phrase {
          word-wrap: nowrap;
          display: inline;
          font-weight: 500;
          font-size: 0.8rem;
          letter-spacing: 0.3rem;
          line-height: 25px;
        }
      `}
    </style>
  </div>
);

export default Mindset;
