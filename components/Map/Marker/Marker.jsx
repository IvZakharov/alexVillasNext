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
            {markerIsActive && <h3 className={styles.title}>{title}</h3>}
            <Image
              alt={"complex marker"}
              src={
                markerIsActive
                  ? "/images/map/AVYellowMarker.svg"
                  : "/images/map/AVBlackMarker.svg"
              }
              width={41}
              height={52}
              sizes="41px"
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
          <div className={styles.wrap}>
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

          {markerIsActive && <h3 className={styles.title}>{title}</h3>}
        </div>
      )}
    </div>
  );
};

export default MapMarker;
