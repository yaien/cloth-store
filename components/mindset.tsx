

export const Mindset = () => (
  <div className="mindset">
    <div className="phrase">SOMOS LO QUE VESTIMOS CUANDO EXTERIORIZAMOS IDEAS POR MEDIO DE LO QUE USAMOS</div>
    <div className="space">.</div>
    <div className="phrase">SOMOS LO QUE VESTIMOS CUANDO EXTERIORIZAMOS IDEAS POR MEDIO DE LO QUE USAMOS</div>
    <div className="space">.</div>
    <div className="phrase">SOMOS LO QUE VESTIMOS CUANDO EXTERIORIZAMOS IDEAS POR MEDIO DE LO QUE USAMOS</div>
    <style jsx>{`

      .space {
        text-align: center;
        min-width: 80px;
      }

      .mindset {
        padding: 5rem 0rem;
        white-space: nowrap;
        display: flex;
        animation: 60s infinite mindset;
      }
      .phrase {
        word-wrap: nowrap;
        display: inline;
        font-weight: 500;
        font-size: 0.8rem;
        letter-spacing: 0.30rem;
        line-height: 25px;
      }  

      @keyframes mindset {
        0% {
          transform: translateX(-150%);
        }
        100% {
          transform: translateX(150%);
        }
      }
    `}
    </style>
  </div>
)

export default Mindset