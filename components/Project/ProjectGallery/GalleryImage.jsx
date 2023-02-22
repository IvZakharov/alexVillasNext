import Image from "next/image";

const GalleryImage = ({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}) => {
  const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AOn8/8HS86Wko87KwADg8v+yr6GDgXg8NDIAiI2EZF1WFwIHJAAA62oTlLT0gJ0AAAAASUVORK5CYII=";

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
          blurDataURL={placeholder}
          placeholder={"blur"}
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
