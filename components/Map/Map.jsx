import styles from "./Map.module.scss";
import React from "react";
import GoogleMapReact from "google-map-react";
import LegendSidebar from "./LegendSidebar/LegendSidebar";
import MapMarker from "./Marker/Marker";
import { mapStyles } from "../../data/mapStyles";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const legendsArr = [
  {
    id: "location1",
    type: "location",
    title: "локация 1",
    markerUrl: "/images/map/legend1.png",
    imageUrl: "/images/map/legendImage.jpg",
    lat: -8.653056862497023,
    lng: 115.12293440614927,
    description:
      "Расположенный по соседству с FINNS recreation club, этот комплекс предлагает все преимущества нахождения в самом сердце наиболее посещаемого района Бали.",
  },
  {
    id: "location2",
    type: "location",
    title: "Локация 2",
    markerUrl: "/images/map/legend2.png",
    imageUrl: "/images/map/legendImage.jpg",
    lat: -8.538933498771776,
    lng: 115.10304664907731,
    description:
      "that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description. I applied for the position after reading the job description.",
  },
  {
    id: "project1",
    type: "complex",
    title: "Проект 1",
    markerUrl: "/images/map/legend1.png",
    imageUrl: "/images/map/legendImage.jpg",
    lat: -8.697406,
    lng: 115.1993728,
    description:
      "that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description. I applied for the position after reading the job description.",
  },
  {
    id: "project2",
    type: "complex",
    title: "Проект 2",
    markerUrl: "/images/map/legend2.png",
    imageUrl: "/images/map/legendImage.jpg",
    lat: -8.438933498771776,
    lng: 115.50204664907731,
    description:
      "that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description. I applied for the position after reading the job description.",
  },
];

const Map = ({ projects }) => {
  const [legendIsOpen, setLegendIsOpen] = React.useState(false);
  const [activeObjectIndex, setActiveObjectIndex] = React.useState(0);

  const defaultProps = {
    center: {
      lat: -8.657406,
      lng: 115.1813728,
    },
    zoom: 13,
  };
  const handleCloseLegend = () => {
    setLegendIsOpen(false);
    setActiveObjectIndex(null);
  };

  const handleClickMarker = (e) => {
    const targetValue = e.currentTarget;

    if (targetValue) {
      setActiveObjectIndex(Number(targetValue.id));
    }

    setLegendIsOpen(true);
  };

  const handleClickPrevBtn = () => {
    if (activeObjectIndex <= 0) {
      setActiveObjectIndex(legendsArr.length - 1);
    } else {
      setActiveObjectIndex((prev) => prev - 1);
    }
  };

  const handleClickNextBtn = () => {
    if (activeObjectIndex >= legendsArr.length - 1) {
      setActiveObjectIndex(0);
    } else {
      setActiveObjectIndex((prev) => prev + 1);
    }
  };

  return (
    <section className={styles.map}>
      <div className={"h-full w-full"}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAj4aa1VwSEdy4Wnq7lTN0PbX7Nkbwz_d8" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={{
            styles: mapStyles,
          }}
        >
          {legendsArr.map((obj, idx) => (
            <MapMarker
              id={idx}
              key={obj.id}
              title={obj.title}
              type={obj.type}
              iconUrl={obj.markerUrl}
              lat={obj.lat}
              lng={obj.lng}
              markerIsActive={activeObjectIndex === idx}
              onClickMarker={(e) => handleClickMarker(e)}
            />
          ))}
        </GoogleMapReact>
      </div>

      <LegendSidebar
        object={legendsArr[activeObjectIndex]}
        isActive={legendIsOpen}
        closeLegend={handleCloseLegend}
        prevObject={handleClickPrevBtn}
        nextObject={handleClickNextBtn}
      />
    </section>
  );
};

export default Map;
