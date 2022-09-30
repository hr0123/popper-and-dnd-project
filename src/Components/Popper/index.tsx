import React from "react";
import { Popper } from "./Popper";

export function PopperContainer() {
  const [text, setText] = React.useState(false);
  const [titleOne, setTitleOne] = React.useState(false);
  const [titleTwo, setTitleTwo] = React.useState(false);
  const [titleThree, setTitleThree] = React.useState(false);
  const [bullet, setBullet] = React.useState(false);

  const onClickSelectText = () => {
    setText(!text);
  };
  const onClickSelectTitleOne = () => {
    setTitleOne(!titleOne);
  };
  const onClickSelectTitleTwo = () => {
    setTitleTwo(!titleTwo);
  };
  const onClickSelectTitleThree = () => {
    setTitleThree(!titleThree);
  };
  const onClickSelectBullet = () => {
    setBullet(!bullet);
  };

  return (
    <Popper
      onClickSelectText={onClickSelectText}
      onClickSelectTitleOne={onClickSelectTitleOne}
      onClickSelectTitleTwo={onClickSelectTitleTwo}
      onClickSelectTitleThree={onClickSelectTitleThree}
      onClickSelectBullet={onClickSelectBullet}
    />
  );
}
