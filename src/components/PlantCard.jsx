import "./componentsStyle/PlantCard.css";
import Button from "./Button";
// import { Link } from "react-router-dom";

export default function PlantCard({
  plantid,
  title,
  imageSrc,
  price,
  discount,
  showDiscount,
}) {
  
  const plantData = { title, 
                      plantid, 
                      imageSrc,
                      price,
                      discount
                    };

  const discountedPrice = discount
    ? (price * (1 - discount / 100)).toFixed(2)
    : price.toFixed(2);

  return (
    <div className="plant-card">
      
      {/* PAPILDYTAS LINKAS */}
      {/* <Link to={`/products/${plantid}`} state={plantData}> */}
        <a>
        
        <div className="img-box">
          {showDiscount && discount > 0 && (
            <div className="discount-block">
              <div className="discount">{discount} %</div>
              <div className="discount">off</div>
            </div>
          )}
          <img className="plant-img" src={imageSrc} alt={title} />
        </div>
        <div className="card-text">
          <h3 className="plant-title">{title}</h3>
          {showDiscount && discount > 0 ? (
            <>
              <span className="discounted-price">${discountedPrice}</span>
              <span className="plant-price-red">${price.toFixed(2)}</span>
            </>
          ) : (
            <div className="plant-price">${price.toFixed(2)}</div>
          )}
        </div>
        </a>
      {/* </Link> */}
      <Button className="green-btn">Buy</Button>
    </div>
  );
}