import "./componentsStyle/BestCard.css";
import Button from "./Button";

export default function BestCard({ title, imageSrc }) {
  return (
    <div className="best-card">
      <a className="best-card-link" href="#">
        <img className="best-img" src={imageSrc} alt={title} />
        <div className="best-overlay">
          <h3 className="best-title">{title}</h3>
        </div>
      </a>
      <Button className="green-btn">Shop Now</Button>
    </div>
  );
}