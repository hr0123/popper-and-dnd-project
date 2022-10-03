import { Wrapper } from "./Styles";

interface PropType {
  list: string[];
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    position: undefined | number
  ) => void;
  onDragEnter: (
    event: React.DragEvent<HTMLDivElement>,
    position: undefined | number
  ) => void;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}

export const DragAndDrop = (props: PropType) => {
  return (
    <Wrapper>
      {props.list &&
        props.list.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(event) => props.onDragStart(event, index)}
            onDragEnter={(event) => props.onDragEnter(event, index)}
            onDragEnd={props.onDragEnd}
            onDragOver={props.onDragOver}
          >
            {item}
          </div>
        ))}
    </Wrapper>
  );
};
