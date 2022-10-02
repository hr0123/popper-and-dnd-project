import React from "react";
import { InputContainer } from "../Input";
import { PopperContainer } from "../Popper";
import { Container, Wrapper } from "./Styles";

export const NotionMenu = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [popperOpen, setPopperOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState(
    'Type "/" for commands'
  );

  return (
    <Container>
      <Wrapper>
        <InputContainer
          inputValue={inputValue}
          setInputValue={setInputValue}
          setPopperOpen={setPopperOpen}
          selectedMenu={selectedMenu}
        />
        {popperOpen ? (
          <PopperContainer
            setInputValue={setInputValue}
            setPopperOpen={setPopperOpen}
            setSelectedMenu={setSelectedMenu}
          />
        ) : null}
      </Wrapper>
    </Container>
  );
};
