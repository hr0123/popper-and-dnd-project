import {
  BulletIcon,
  Content,
  StyledInput,
  TitleInput,
  Wrapper,
} from "./Styles";

interface PropType {
  inputValue: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedMenu: string;
}

export const Input = (props: PropType) => {
  return (
    <Wrapper>
      <TitleInput type="text" placeholder="Untitled" />
      <Content>
        {props.selectedMenu === "List" ? <BulletIcon>•</BulletIcon> : null}
        <StyledInput
          type="text"
          value={props.inputValue}
          placeholder={props.selectedMenu}
          onChange={props.onChangeInput}
          selectedMenu={props.selectedMenu}
        />
      </Content>
    </Wrapper>
  );
};
