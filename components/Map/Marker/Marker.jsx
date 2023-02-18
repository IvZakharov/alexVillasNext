import styles from "./Marker.module.scss";
import React from "react";
import Image from "next/image";

const MapMarker = ({
  iconUrl,
  title,
  type,
  id,
  markerIsActive,
  onClickMarker,
}) => {
  return (
    <div className={styles.marker} onClick={onClickMarker} id={id}>
      {type === "complex" && (
        <>
          <div
            className={`${styles.projectIcon}  ${
              markerIsActive && styles.projectIconActive
            }`}
          >
            {markerIsActive && (
              <h3 className={styles.title}>ALEX VILLAS {title}</h3>
            )}
            <Image
              alt={"complex marker"}
              src={
                markerIsActive
                  ? "/images/map/projectLabelActive.png"
                  : "/images/map/projectLabel.png"
              }
              width={51}
              height={62}
              sizes="51px"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </>
      )}
      {type === "location" && (
        <div
          className={`${styles.locationIcon}  ${
            markerIsActive && styles.locationIconActive
          }`}
        >
          <Image
            alt={"location marker"}
            src={iconUrl}
            width={68}
            height={68}
            sizes="68px"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MapMarker;
