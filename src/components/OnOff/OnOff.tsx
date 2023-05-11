import React, {useState} from "react";
import s from "./OnOff.module.css";

const OnOff = () => {
  const [on, setOn] = useState(false);
  const styleOff = on ? `${s.button} ${s.off}` : `${s.button} ${s.off} ${s.active}`;
  const styleOn = on ? `${s.button} ${s.on} ${s.active}` : `${s.button} ${s.on}`;
  const labelOn = `${s.label} ${s.labelOn}`;
  const labelOff = `${s.label} ${s.labelOff}`;
  return (
    <div className={s.block}>
      <div className={styleOn} onClick={() => setOn(true)}>On</div>
      <div className={styleOff} onClick={() => setOn(false)}>Off</div>
      <div className={s.labelBox}>
        <label className={on ? labelOn : labelOff}/>
      </div>
    </div>
  );
};

export default React.memo(OnOff);