import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./card";
function HomeCards({ title, className, items }) {
  const history = useHistory();
  const showProductDetails = (id) => {
    history.push(`/products/${id}`);
  };
  if (items.length === 0)
    return <div className="products">there are no items</div>;
  return (
    <>
      {title && <h2>{title}</h2>}
      <div className={className}>
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Card
                title={item.name}
                text={item.description}
                // image={item.productImage}
                buttonLabel="show details"
                onClick={() => showProductDetails(item.id)}
                variant="primary"
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default HomeCards;
