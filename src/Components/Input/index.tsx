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
    event.target.value.lastIndexOf("/") === event.target.value.length - 1
      ? props.setPopperOpen(true)
      : props.setPopperOpen(false);
  };

  return (
    <Input
      inputValue={props.inputValue}
      onChangeInput={onChangeInput}
      selectedMenu={props.selectedMenu}
    />
  );
};
