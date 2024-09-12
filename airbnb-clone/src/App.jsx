/* eslint-disable react/prop-types */
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import data from "../data";

export default function App() {
  const cards = data.map((props) => (
    <Card
      img={props.coverImg}
      rating={props.stats.rating}
      reviewCount={props.stats.reviewCount}
      location={props.location}
      title={props.title}
      price={props.price}
      key={props.id}
      openSpots={props.openSpots}
    />
  ));
  return (
    <>
      <NavBar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}
