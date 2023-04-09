import React, {FC} from "react";

type AccordionTitlePropsType = {
  title: string;
  callback?: () => void;
}

const AccordionTitle: FC<AccordionTitlePropsType> = ({title, callback}) => {
  const onClickHandler = () => {
    if(callback) callback()
  }
  return (
    <h3 onClick={onClickHandler}>{title}</h3>
  );
};

export default AccordionTitle;