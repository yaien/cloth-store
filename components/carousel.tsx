import { Picture } from "chillhood";
import { FC } from "react";
import useSettings from "../context/hooks/use-settings";


export interface CarouselProps {
  pictures: Picture[]
}

const Carousel: FC<CarouselProps> = (props) => {
  const settings = useSettings()
  
  const img = settings.cloudinary?.url(props.pictures[0].reference, {
    width: 476,
    height: 570,
    crop: "pad"
  })


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
