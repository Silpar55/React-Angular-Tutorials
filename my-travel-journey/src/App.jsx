import Header from "./components/Header";
import data from "./data";

export default function App() {
  const places = data.map((place, index) => (
    <div className="place--card" key={index}>
      <div
        className="place--image"
        style={{
          backgroundImage: `url(${place.imageUrl || "defaultImageUrl"})`, // optional fallback
          backgroundColor: "lightgray",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="place--info">
        <div className="place--location">
          <img src="point.svg" alt="point" />
          <p>{place.location}</p>
          <a href={place.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="place--title">{place.title}</h2>
        <p className="place--dates">
          {place.startDate} - {place.endDate}
        </p>
        <p className="place--description">{place.description}</p>
      </div>
    </div>
  ));

  return (
    <main>
      <Header />
      <section className="places">{places}</section>
    </main>
  );
}
