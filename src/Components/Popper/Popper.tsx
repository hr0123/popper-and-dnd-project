import { ContentWrapper, Icon, Row, Subtitle, Title, Wrapper } from "./Styles";

interface PropType {
  onClickSelectText: () => void;
  onClickSelectTitleOne: () => void;
  onClickSelectTitleTwo: () => void;
  onClickSelectTitleThree: () => void;
  onClickSelectBullet: () => void;
}

export const Popper = (props: PropType) => {
  return (
    <Wrapper>
      <Row>
        <Icon></Icon>
        <ContentWrapper onClick={props.onClickSelectText}>
          <Title>텍스트</Title>
          <Subtitle>일반 텍스트를 사용해 쓰기를 시작하세요.</Subtitle>
        </ContentWrapper>
      </Row>
      <Row>
        <Icon></Icon>
        <ContentWrapper onClick={props.onClickSelectTitleOne}>
          <Title>제목1</Title>
          <Subtitle>섹션 제목(대)</Subtitle>
        </ContentWrapper>
      </Row>
      <Row>
        <Icon></Icon>
        <ContentWrapper onClick={props.onClickSelectTitleTwo}>
          <Title>제목2</Title>
          <Subtitle>섹션 제목(중)</Subtitle>
        </ContentWrapper>
      </Row>
      <Row>
        <Icon></Icon>
        <ContentWrapper onClick={props.onClickSelectTitleThree}>
          <Title>제목3</Title>
          <Subtitle>섹션 제목(소)</Subtitle>
        </ContentWrapper>
      </Row>
      <Row>
        <Icon></Icon>
        <ContentWrapper onClick={props.onClickSelectBullet}>
          <Title>글머리 기호 목록</Title>
          <Subtitle>간단한 글머리 기호 목록을 생성하세요.</Subtitle>
        </ContentWrapper>
      </Row>
    </Wrapper>
  );
};
