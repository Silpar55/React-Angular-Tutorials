/* eslint-disable react/prop-types */

export default function Card(props) {
  let badgeText;
  if (props.location === "Online") badgeText = "ONLINE";
  else if (props.openSpots === 0) badgeText = "SOLD OUT";

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src="star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
