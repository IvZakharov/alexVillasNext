import styles from "./Map.module.scss";
import React from "react";
import GoogleMapReact from "google-map-react";
import LegendSidebar from "./LegendSidebar/LegendSidebar";
import MapMarker from "./Marker/Marker";
import { mapStyles } from "../../data/mapStyles";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ title, description, objects }) => {
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
      setActiveObjectIndex(objects.length - 1);
    } else {
      setActiveObjectIndex((prev) => prev - 1);
    }
  };

  const handleClickNextBtn = () => {
    if (activeObjectIndex >= objects.length - 1) {
      setActiveObjectIndex(0);
    } else {
      setActiveObjectIndex((prev) => prev + 1);
    }
  };

  return (
    <section className={styles.map}>
      <div className={"container"}>
        {title || description ? (
          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-7 lg:mb-12 "
            }
          >
            <h2 className={"h2 whitespace-pre-line"}>{title}</h2>
            <p className={"text textSmall md:mt-auto"}>{description}</p>
          </div>
        ) : null}
      </div>
      <div className={"h-full w-full relative"}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAj4aa1VwSEdy4Wnq7lTN0PbX7Nkbwz_d8" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={{
            styles: mapStyles,
          }}
        >
          {objects &&
            objects.map((obj, idx) => (
              <MapMarker
                id={idx}
                key={obj.id}
                title={obj.title}
                type={obj.type}
                iconUrl={obj.icon?.data?.attributes.url}
                lat={obj.lat}
                lng={obj.lng}
                markerIsActive={activeObjectIndex === idx}
                onClickMarker={(e) => handleClickMarker(e)}
              />
            ))}
        </GoogleMapReact>

        <LegendSidebar
          objects={objects}
          activeObjectIndex={activeObjectIndex}
          isActive={legendIsOpen}
          closeLegend={handleCloseLegend}
          prevObject={handleClickPrevBtn}
          nextObject={handleClickNextBtn}
        />
      </div>
    </section>
  );
};

export default Map;
