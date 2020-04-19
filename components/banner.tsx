const Banner = () => (
  <div className="banner">
    <style jsx>{`
      .banner {
        height: 150px;
        width: 100%;
        background-image: url("/static/banner.jpeg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      @media (min-width: 768px) {
        .banner {
          height: 300px;
        }
      }
    `}</style>
  </div>
);

export default Banner;
