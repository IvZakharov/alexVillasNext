import React from "react";
import styles from "./ProjectGallery.module.scss";

import PhotoAlbum from "react-photo-album";
import GalleryImage from "./GalleryImage";
import Image from "next/image";

const ProjectGallery = ({ images }) => {
  const photos = (images) => {
    const newArr = [];

    if (!images) return;

    images.map((image) => {
      newArr.push({
        src: image.attributes.url,
        sizes: "50vw",
        placeholder: image.attributes.placeholder,
        width: image.attributes.width,
        height: image.attributes.height,
        title: image.attributes.caption,
        alt: image.attributes.caption,
      });
    });

    return newArr;
  };
  return (
    <section className={styles.projectGallery}>
      <div className="container">
        <PhotoAlbum
          layout="columns"
          photos={photos(images)}
          columns={2}
          renderPhoto={GalleryImage}
        />
      </div>
    </section>
  );
};

export default ProjectGallery;
