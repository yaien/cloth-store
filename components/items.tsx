import Link from "next/link";

export interface ItemsProps {
  items: API.Item[];
}

export const Items = ({ items }: ItemsProps) => {
  return (
    <div className="items">
      {items.map(item => (
        <Item key={item.id} item={item} />
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

export interface ItemProps {
  item: API.Item;
}

export const Item = ({ item }: ItemProps) => {
  const img =
    "https://assets.viralstyle.com/campaigns/76eb8a7b-9197-b8c4-fd94-5f8eb60ca631/Vk8V0z-DVm8MK-6b2B3J-front-large.jpg";
  return (
    <>
      <Link href={"/items/" + item.slug}>
        <div className="item">
          <div className="item-picture">
            <div className="item-overlay">
              <div className="item-overlay-content">
                <div className="item-overlay-background" />
                <div className="item-overlay-link">
                  <i className="material-icons">add</i>
                </div>
              </div>
            </div>
            <img src={img} alt="" />
          </div>
          <div className="item-info">
            <h4 className="item-name">{item.name}</h4>
            <span className="item-price">CO${item.price.toLocaleString()}</span>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .item {
          border: 2px solid #d1d1d1;
          overflow: hidden;
          border-radius: 0.5rem;
          width: 40%;
          margin: 0.5rem;
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.125);
          background-color: #e1e1e1;
          cursor: pointer;
        }

        .item:hover {
          box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
        }

        .item-picture {
          background: white;
          text-align: center;
          position: relative;
        }
        .item-picture img {
          width: 80%;
          height: auto;
        }
        .item-info {
          padding: 0.25rem;
          text-align: center;
          heigth: 100%;
        }

        .item-price {
          color: #750000;
          font-weight: bold;
          font-size: 1rem;
        }
        .item-name {
          margin: 0.5rem;
          font-size: 1rem;
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
          background-color: #ad2a3b;
          height: 100%;
          width: 100%;
          position: absolute;
          opacity: 0.5;
        }

        .item-overlay-link {
          z-index: 10;
          color: white;
          border: 2px solid #f1f1f1;
          background: transparent;
          text-decoration: #800414;
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
          background: white;
          color: #ad2a3b;
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
    </>
  );
};

export default Items;
