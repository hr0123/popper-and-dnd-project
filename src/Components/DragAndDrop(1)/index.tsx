// https://www.aurigait.com/blog/drag-and-drop-in-react/
import React from "react";
import { DragAndDrop } from "./DragAndDrop";

export const DragAndDropContainer = () => {
  const itemArr = ["item1", "item2", "item3", "item4", "item5", "item6"];
  const [list, setList] = React.useState(itemArr);

  // 🔴only one item can be in the drag state => use useRef hook to keep track of the item being dragged by its position
  const dragItem = React.useRef();
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    position: undefined | number
  ) => {
    dragItem.current = position;
    if (event.target instanceof Element) {
      console.log(event.target.innerHTML);
    }
  };

  // 🔴while we drop the dragging item, we can see it’s shadow is going back to it’s original place. This can make user feel that dnd is not happening. We will avoid it
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // 🔴find over which item our dragged item is hovering
  const dragOverItem = React.useRef();
  const onDragEnter = (
    event: React.DragEvent<HTMLDivElement>,
    position: undefined | number
  ) => {
    dragOverItem.current = position;
    if (event.target instanceof Element) {
      console.log(event.target.innerHTML);
    }
  };

  // 🔴reshuffle the list when you finally drop the item over any of the other item
  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <DragAndDrop
      list={list}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    />
  );
};
