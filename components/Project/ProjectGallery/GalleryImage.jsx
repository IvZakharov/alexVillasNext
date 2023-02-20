import Image from "next/image";

const GalleryImage = ({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}) => {
  return (
    <div style={wrapperStyle}>
      <div
        style={{
          display: "block",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          title={title}
          sizes={sizes}
          className={className}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default GalleryImage;
