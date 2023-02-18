import styles from "./Map.module.scss";
import React from "react";
import GoogleMap from "google-maps-react-markers";
// import LegendSidebar from "./LegendSidebar/LegendSidebarTest";
// import MapMarker from "./Marker/MarkerTest";
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

const MapTest = ({ projects }) => {
  const [legendIsOpen, setLegendIsOpen] = React.useState(false);
  const [activeObjectIndex, setActiveObjectIndex] = React.useState(0);

  const handleCloseLegend = () => {
    setLegendIsOpen(false);
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
        <GoogleMap
          apiKey="AIzaSyAj4aa1VwSEdy4Wnq7lTN0PbX7Nkbwz_d8"
          defaultCenter={{ lat: -8.657406, lng: 115.1513728 }}
          mapMinHeight="600px"
          options={{
            styles: mapStyles,
          }}
        >
          <AnyReactComponent lat={-8.657406} lng={115.1513728} text={"text"} />
        </GoogleMap>
      </div>
    </section>
  );
};

export default MapTest;
