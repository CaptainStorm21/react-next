import './Card.css';

const Card = (props) =>  (
    <div className="card">
      <div className="front">
        <img src="/static/juice.jpg" alt="Avatar" className="card-image" />
        <div className="container">
          <h3>Vitamin Juice <span className="price">$24.99</span></h3> 
          <p>flavor bmo.</p>
        </div>
      </div>
    </div>
);

export default Card;
