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
        <Row>
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
            <Title id='Type "/" for commands' onClick={props.onClickMenu}>
              Text
            </Title>
            <Subtitle>Just start writing with plain text.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row>
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
            <Title id="Heading 1" onClick={props.onClickMenu}>
              Heading 1
            </Title>
            <Subtitle>Big section heading.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row>
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
            <Title id="Heading 2" onClick={props.onClickMenu}>
              Heading 2
            </Title>
            <Subtitle>Medium section heading.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row>
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
            <Title id="Heading 3" onClick={props.onClickMenu}>
              Heading 3
            </Title>
            <Subtitle>Small section heading.</Subtitle>
          </ContentWrapper>
        </Row>
        <Row>
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
            <Title id="List" onClick={props.onClickMenu}>
              Bulleted list
            </Title>
            <Subtitle>Create a simple bulleted list.</Subtitle>
          </ContentWrapper>
        </Row>
      </Box>
    </Wrapper>
  );
};
