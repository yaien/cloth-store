const img =
  "https://assets.viralstyle.com/campaigns/76eb8a7b-9197-b8c4-fd94-5f8eb60ca631/Vk8V0z-DVm8MK-6b2B3J-front-large.jpg";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="current">
        <img src={img} alt="" />
      </div>
      <style jsx>{`
        .current {
          text-align: center;
          width: 100%;
        }
        .current img {
          width: 50%;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
