import React, {FC} from "react";

type AccordionBodyPropsType = {
  collapsed: boolean;
}

const AccordionBody: FC<AccordionBodyPropsType> = ({collapsed}) => {
  return collapsed ?
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul> : <ul/>
};

export default AccordionBody;

