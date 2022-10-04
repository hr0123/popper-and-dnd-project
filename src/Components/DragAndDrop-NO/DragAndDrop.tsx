import React from "react";

interface PropType {
  list: string[];
  // onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  // onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  // onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  // onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  // onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
  // onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
}

export const DragAndDrop = (props: PropType) => {
  return (
    <ul>
      {props.list.map((item, index) => {
        return (
          <li
            key={index}
            draggable={true}
            data-position={index} //dataset에 index값을 주면, 선택된 index를 찾을 수 있다(ex- event.currentTarget.dataset.position)
            // onDragStart={props.onDragStart}
            // onDragOver={props.onDragOver}
            // onDrop={props.onDrop}
            // onDragLeave={props.onDragLeave}
            // onDragEnter={props.onDragEnter}
            // onDragEnd={props.onDragEnd}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
