import { BulletListIcon } from "../svgIcon/BulletListIcon";
import { HeadingOneIcon } from "../svgIcon/HeadingOneIcon";
import { HeadingThreeIcon } from "../svgIcon/HeadingThreeIcon";
import { HeadingTwoIcon } from "../svgIcon/HeadingTwoIcon";
import { TextIcon } from "../svgIcon/TextIcon";
import { Box, ContentWrapper, Row, Subtitle, Title, Wrapper } from "./Styles";

interface PropType {
  onClickMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Popper = (props: PropType) => {
  return (
    <Wrapper>
      <Box>
        <Row onClick={props.onClickMenu}>
          <TextIcon
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper>
            <Title id='Type "/" for commands'>Text</Title>
            <Subtitle>Just start writing with plain text.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row onClick={props.onClickMenu}>
          <HeadingOneIcon
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper>
            <Title id="Heading 1">Heading 1</Title>
            <Subtitle>Big section heading.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row onClick={props.onClickMenu}>
          <HeadingTwoIcon
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper>
            <Title id="Heading 2">Heading 2</Title>
            <Subtitle>Medium section heading.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row onClick={props.onClickMenu}>
          <HeadingThreeIcon
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper>
            <Title id="Heading 3">Heading 3</Title>
            <Subtitle>Small section heading.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row onClick={props.onClickMenu}>
          <BulletListIcon
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper>
            <Title id="List">Bulleted list</Title>
            <Subtitle>Create a simple bulleted list.</Subtitle>
          </ContentWrapper>
        </Row>
      </Box>
    </Wrapper>
  );
};
