import React from "react";
import { Popper } from "./Popper";

interface PropType {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setPopperOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

export const PopperContainer = (props: PropType) => {
  const onClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    props.setInputValue("");
    if (event.target instanceof Element) {
      props.setSelectedMenu(event.target.id);
    }
    props.setPopperOpen(false);
  };

  return <Popper onClickMenu={onClickMenu} />;
};
