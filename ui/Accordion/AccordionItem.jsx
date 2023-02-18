import React from "react";
import styles from "./Accordion.module.scss";
import md from "markdown-it";

const AccordionItem = ({ title, body, Id, Index, setIndex }) => {
  const [open, setOpen] = React.useState(false);
  const [bodyHeight, setBodyHeight] = React.useState();
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) {
      setBodyHeight(bodyRef.current.scrollHeight);
    }
  }, [bodyHeight]);

  const handleSetIndex = (Id) => {
    if (Index !== Id) {
      setIndex(Id);
      setOpen(true);
    } else {
      setOpen(!open);
    }
  };

  return (
    <div className={styles.item}>
      <div
        onClick={() => handleSetIndex(Id)}
        className="w-full flex justify-between items-center py-6 cursor-pointer"
      >
        <p className={`${styles.title}`}>{title}</p>
        <i
          className={`${styles.icon} ${
            open && Index === Id ? "rotate-180" : ""
          }`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16602 8.33398L12.4993 16.6673L20.8327 8.33398"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </i>
      </div>

      <div
        className={`${styles.body}`}
        style={{ maxHeight: open && Index === Id ? bodyHeight : 0 }}
        ref={bodyRef}
      >
        <div
          className={`text pb-8 pt-10 pt-0 pr-10 xl:pr-32`}
          dangerouslySetInnerHTML={{ __html: md().render(body) }}
        ></div>
      </div>
    </div>
  );
};

export default AccordionItem;
