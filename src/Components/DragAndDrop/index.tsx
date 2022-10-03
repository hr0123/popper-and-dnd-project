// https://velog.io/@whljm1003/React-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%97%86%EC%9D%B4-drag-and-drop-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
import React from "react";
import { DragAndDrop } from "./DragAndDrop";

export const DragAndDropContainer = () => {
  // draggedFrom에는 드래그 시작하는 인덱스를, draggedTo는 변경될 드래그 인덱스를 할당 예정
  // originalOrder에는 dragAndDrop할 list 목록 배열을, updatedOrder에는 dragAndDrop 결과 배열을 할당
  const [dragAndDrop, setDragAndDrop] = React.useState({
    draggedFrom: 0,
    draggedTo: 0,
    isDragging: false,
    originalOrder: [""],
    updatedOrder: [""],
  });

  const [list, setList] = React.useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
  ]);

  // 1.사용자가 객체(object)를 드래그하려고 시작할 때 발생
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.opacity = "0.4";
    const initialPosition = parseInt(event.currentTarget.dataset.position); //드래그를 시작했을 때의 배열의 인덱스
    setDragAndDrop({
      //시작한 드래그의 인덱스 값(draggedFrom)과 드래그 리스트에 사용할 배열(originalOrder)를 담은 객체로 수정
      ...dragAndDrop,
      draggedFrom: initialPosition,
      originalOrder: list,
    });
  };

  // 2.드래그로 인해 item들이 겹쳐졌을 때 발생(milli sec마다)
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom; //drag되는 항목의 인덱스(시작) 찾아냄
    const draggedTo = parseInt(event.currentTarget.dataset.position); //drop가능한 영역의 인덱스(끝) 찾아냄
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom //1)draggedFrom(시작) 항목 제외한 목록 배열
    );
    newList = [
      //2)drag 시작 및 끝 인덱스를 사용해, 새 배열을 반환
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];
    if (draggedTo !== dragAndDrop.draggedTo) {
      //3)drop가능한 영역이 변경될 시, 객체를 수정
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  // 3.잡은 Item을 적절한 곳에 놓았을 때 발생: drag가 끝났으므로 dragAndDrop 상태를 초기화(1)
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({ ...dragAndDrop, draggedFrom: 0, draggedTo: 0 });
  };

  // 4.범위를 벗어나면 발생: ClassName을 주어 css커스텀 가능 / drag가 끝났으므로 dragAndDrop 상태를 초기화(2)
  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.remove("over");
    setDragAndDrop({ ...dragAndDrop, draggedTo: 0 });
  };

  // 5. 다른 item과 겹쳐졌을 때 발생(1번만): ClassName을 주어 css커스텀 가능
  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.classList.add("over");
  };

  // 6.drag해온 Item을 drop했을 때 발생(다른 item과 겹치지 않아도 발생): css커스텀 하기 위한 코드
  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.opacity = "1";
    const listItems = document.querySelectorAll(".draggable");
    listItems.forEach((item) => {
      item.classList.remove("over");
    });
  };

  return (
    <DragAndDrop
      list={list}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
    />
  );
};
