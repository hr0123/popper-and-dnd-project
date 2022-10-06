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
        <Row id='Type "/" for commands' onClick={props.onClickMenu}>
          <TextIcon
            id='Type "/" for commands'
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper id='Type "/" for commands'>
            <Title id='Type "/" for commands'>Text</Title>
            <Subtitle id='Type "/" for commands'>
              Just start writing with plain text.
            </Subtitle>
          </ContentWrapper>
        </Row>
        <Row id="Heading 1" onClick={props.onClickMenu}>
          <HeadingOneIcon
            id="Heading 1"
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper id="Heading 1">
            <Title id="Heading 1">Heading 1</Title>
            <Subtitle id="Heading 1">Big section heading.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row id="Heading 2" onClick={props.onClickMenu}>
          <HeadingTwoIcon
            id="Heading 2"
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper id="Heading 2">
            <Title id="Heading 2">Heading 2</Title>
            <Subtitle id="Heading 2">Medium section heading.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row id="Heading 3" onClick={props.onClickMenu}>
          <HeadingThreeIcon
            id="Heading 3"
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper id="Heading 3">
            <Title id="Heading 3">Heading 3</Title>
            <Subtitle id="Heading 3">Small section heading.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row id="List" onClick={props.onClickMenu}>
          <BulletListIcon
            id="List"
            style={{
              width: "20%",
              height: "100%",
              border: "1px solid #ECEBEC",
              borderRadius: 5,
              marginRight: 10,
              padding: 6,
            }}
          />
          <ContentWrapper id="List">
            <Title id="List">Bulleted list</Title>
            <Subtitle id="List">Create a simple bulleted list.</Subtitle>
          </ContentWrapper>
        </Row>
      </Box>
    </Wrapper>
  );
};
