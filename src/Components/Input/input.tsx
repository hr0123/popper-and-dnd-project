import React from "react";

export const Input = (props: { setPopperOpen: (arg0: boolean) => void }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [typed, setTyped] = React.useState(false);

  const onChangeInput = (event: any) => {
    setInputValue(event.target.value);
    if (event?.target.value === "/") {
      props.setPopperOpen(true);
    } else if (!event?.target.value) {
      props.setPopperOpen(false);
      setTyped(true);
    }
  };

  return (
    <>
      {typed ? (
        <div>{inputValue}</div>
      ) : (
        <input
          type="text"
          onChange={onChangeInput}
          style={{
            border: "1px solid gray",
            width: 300,
            height: 30,
            fontSize: 24,
            padding: 4,
          }}
        />
      )}
    </>
  );
};
