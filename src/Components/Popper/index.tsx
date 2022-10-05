import React, { Dispatch, SetStateAction } from "react";
import { Popper } from "./Popper";

interface PropType {
  setInputValue: Dispatch<SetStateAction<string>>;
  setPopperOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedMenu: Dispatch<SetStateAction<string>>;
}

export const PopperContainer = (props: PropType) => {
  const onClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    props.setInputValue("");
    if (event.target instanceof Element) {
      props.setSelectedMenu(event.target.id);
    }
    // if (event.target instanceof Element) {
    //   console.log(event.target.id);
    // }
    props.setPopperOpen(false);
  };

  return <Popper onClickMenu={onClickMenu} />;
};
