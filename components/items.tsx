import Link from "next/link";
import useSettings from "../context/hooks/use-settings";
import { Item } from "chillhood";
import { useEffect, useState } from "react";

export interface ItemList {
  items: Item[];
}

export const ItemList = ({ items }: ItemList) => {
  return (
    <div className="items">
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
      <style jsx>{`
        .items {
          display: flex;
          flex-direction: row;
          padding: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export interface CardItemProps {
  item: Item;
}

export const CardItem = ({ item }: CardItemProps) => {
  const settings = useSettings();
  const [current, setCurrent] = useState<string>()

  useEffect(() => {
    
  }, [])

  if (!settings.ready) {
    return null;
  }

  if (!item.pictures || !item.pictures.length) {
    return null;
  }

  let img: string | undefined

  if (item.pictures.length > 0) {
    img = settings.cloudinary?.url(item.pictures[0].reference, {
      width: 430,
      height: 520,
      crop: "pad",
    });
  }

  let hover: string | undefined
  if(item.pictures.length > 1) {
    hover = settings.cloudinary?.url((item.pictures[1]).reference, {
      width: 430,
      height: 520,
      crop: "pad",
    })
  }


  
  return (
    <Link href={"/items/" + item.slug} as={"/items/" + item.slug}>
      <div className="item">
        <div className="item-picture" onMouseEnter={() => setCurrent(hover)} onMouseLeave={() => setCurrent(img)}>
          <img src={current || img} alt="" />
        </div>
        <div className="item-info">
          <h4 className="item-name">{item.name}</h4>
          <span className="item-price">CO${item.price.toLocaleString()}</span>
        </div>
        <style jsx>{`
          .item {
            overflow: hidden;
            border-radius: 0.5rem;
            width: 100%;
            margin: 0.5rem;
            background-color: var(--bg-light);
            cursor: pointer;
          }

          .item:hover {
          }

          .item-picture {
            background: white;
            text-align: center;
            position: relative;
          }
          .item-picture img {
            width: 100%;
            height: auto;
          }
          .item-info {
            padding: 0.25rem;
            text-align: left;
            heigth: 100%;
          }

          .item-price {
            color: var(--text-primary);
            letter-spacing: 0.125rem;
            font-size: 0.8rem;
            font-weight: 300;
          }
          .item-name {
            margin-bottom: 0.125rem;
            letter-spacing: 0.125rem;
            font-size: 0.8rem;
            font-weight: 400;
            text-transform: uppercase;
          }

          .item-overlay {
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            transition: opacity 0.5s;
          }

          .item-overlay:hover {
            opacity: 1;
          }

          .item-overlay-content {
            height: 100%;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .item-overlay-background {
            background-color: var(--bg-hover-primary);
            height: 100%;
            width: 100%;
            position: absolute;
            opacity: 0.5;
          }

          .item-overlay-link {
            z-index: 10;
            color: var(--text-light);
            border: 2px solid var(--border-light);
            background: transparent;
            text-decoration: var(--text-decoration-primary);
            cursor: pointer;
            padding: 1rem;
            border-radius: 50%;
            transition: all 0.5s;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
          }

          .item-overlay-link i {
            font-size: 4rem;
          }

          .item-overlay-link:hover {
            background: var(--bg-light);
            color: var(--text-primary);
            padding: 0.125rem;
          }

          @media (min-width: 640px) {
            .item {
              max-width: 23%;
            }
          }

          @media (mid-width: 768px) {
            .item-overlay-link i {
              font-size: 8rem;
            }
          }
        `}</style>
      </div>
    </Link>
  );
};
export default ItemList;
