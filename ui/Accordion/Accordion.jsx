import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [Index, setIndex] = React.useState(false);

  return (
    <>
      {data &&
        data.map((item, idx) => {
          return (
            <AccordionItem
              title={item.question}
              Id={idx}
              body={item.answer}
              Index={Index}
              setIndex={setIndex}
              key={idx}
            />
          );
        })}
    </>
  );
};
export default Accordion;
