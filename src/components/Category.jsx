import './componentsStyle/Category.css';

export default function Category({title, imageSrc}) {
  return (
    <div className="card">
        <img className="card-img" src={imageSrc} alt={title} />
        <h3 className="card-title">{title}</h3>
    </div>
  );
}