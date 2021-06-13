import { useEffect, useState } from "react";

const banners = [
  "/static/banner.png",
  "/static/banner-2.png",
  "/static/banner-3.png",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        let next = current + 1
        if(next > (banners.length - 1)) {
          next = 0
        }
        setCurrent(next)
      }, 5000)
      return () => clearInterval(interval)
  }, [current])

  const banner = banners[current]

  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})`}} >
      <style jsx>{`
        .banner {
          height: 450px;
          width: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .banner {
            height: 690px;
            background-size: cover;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
