import React, {FC, useEffect, useReducer} from "react";
import s from "./Select.module.css";
import {VscChevronDown, VscChevronUp} from "react-icons/vsc";
import {reducer} from "./select-reducer";

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: Array<ItemType>
  children?: React.ReactNode;
}

const Select: FC<SelectPropsType> = ({value, onChange, items, children}) => {
  const [state, dispatch] = useReducer(reducer, {
    active: false,
    hovered: value,
  });
  const hoveredElement = items.find(item => item.value === value);
  const toggleSelect = () => dispatch({type: "CLICK_SELECT"});
  const closeSelect = () => dispatch({type: "CLOSE_SELECT", value});
  const setValue = (value: any) => dispatch({type: "CHOOSE_SELECT", value});
  const onChangeHandler = (value: any) => onChange(value);
  const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      for (let i = 0; i < items.length; i++) {
        if (items[i].value === state.hovered) {
          e.key === "ArrowUp" && i !== 0 && setValue(items[i - 1].value);
          e.key === "ArrowDown" && i !== items.length - 1 && setValue(items[i + 1].value);
          break;
        }
      }
      if (!state.hovered) setValue(items[0].value);
    }
    if (e.key === "Escape") closeSelect();
    if (e.key === "Enter") onChangeHandler(state.hovered);
  };

  useEffect(() => {
    dispatch({type: "CLOSE_SELECT", value});
  }, [value]);
  return (
    <>
      <h3>{children}</h3>
      <div className={s.container} onClick={toggleSelect}>
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
          <span className={s.title}>{`${hoveredElement ? hoveredElement.title : ""}`}</span>
          {state.active ?
            <VscChevronUp className={s.shevron}/> :
            <VscChevronDown className={s.shevron}/>}
        </div>
        <div className={`${s.items} ${state.active ? s.active : ""}`}>
          {items.map(i => {
            const onMouseEnter = () => {
              setValue(i.value);
            };
            return (
              <div key={i.value}
                   onMouseEnter={onMouseEnter}
                   onBlur={closeSelect}
                   onClick={() => onChangeHandler(i.value)}
                   className={`${s.item} ${i.value === state.hovered && s.selected}`}>
                {i.title}
              </div>
            );
          })}
        </div>
      </div>
    </>

  );
};


export default React.memo(Select);