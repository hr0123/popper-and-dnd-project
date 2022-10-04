import React, { Dispatch, SetStateAction } from "react";
import { Input } from "./input";

interface PropType {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setPopperOpen: Dispatch<SetStateAction<boolean>>;
  selectedMenu: string;
}

export const InputContainer = (props: PropType) => {
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(event.target.value);
    if (event.target.value.includes("/") === true) {
      props.setPopperOpen(true);
    } else if (event.target.value.includes("/")) {
      props.setPopperOpen(false);
      props.setInputValue("");
    }
  };

  return (
    <Input
      inputValue={props.inputValue}
      onChangeInput={onChangeInput}
      selectedMenu={props.selectedMenu}
    />
  );
};
