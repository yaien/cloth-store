import { Picture } from "chillhood";
import { FC, useState, useEffect } from "react";
import useSettings from "../context/hooks/use-settings";

export interface CarouselProps {
  pictures: Picture[];
}

const Carousel: FC<CarouselProps> = (props) => {
  const settings = useSettings();
  const [current, setCurrent] = useState<Picture>(props.pictures[0]);
  const [show, setShow] = useState(5);
  const [start] = useState(0);

  function thumbnail(reference: string) {
    return settings.cloudinary?.url(reference, {
      width: 90,
      height: 90,
      crop: "pad",
    });
  }

  function preview(reference: string) {
    return settings.cloudinary?.url(reference, {
      width: 476,
      height: 530,
      crop: "pad",
    });
  }

  useEffect(() => {
    const resize = () => {
      const width = document.documentElement.clientWidth;
      if (width > 640) {
        setShow(4)
        return
      } 
      setShow(3)
    }
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  const pictures = props.pictures.slice(start, show);

  return (
    <div className="carousel">
      <div className="list">
        {pictures.map(picture => (
          <div
            className="thumbnail"
            key={picture.reference}
            onMouseOver={() => setCurrent(picture)}
            onClick={() => setCurrent(picture)}
          >
            <img src={thumbnail(picture.reference)} alt=""></img>
          </div>
        ))}
      </div>
      <div className="preview">
        <img src={preview(current.reference)} alt="" />
      </div>
      <style jsx>{`
        .carousel {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: center;
        }
        .list {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          overflow: hidden;
        }
        .thumbnail {
          cursor: pointer;
        }
        .preview {
          text-align: center;
          width: 80%;
        }
        .preview img {
          width: 100%;
        }
        @media (min-width: 640px) {
          .carousel {
            flex-direction: row;
            align-items: stretch;
          }
          .list {
            justify-content: flex-start;
            flex-direction: column;
            width: 20%;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
