import styled from "@emotion/styled";

export const Wrapper = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const TitleInput = styled("input")(() => ({
  width: "100%",
  height: "100%",
  backgroundColor: "green",
  fontSize: 42,
  fontWeight: 900,
  border: "none",
  outline: "none",
  marginBottom: 10,
}));

export const Content = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const StyledInput = styled("input")((props: any) => ({
  // width: 300,
  width: "100%",
  height: "100%",
  backgroundColor: "yellow",
  fontSize:
    props.selectedMenu === "Heading 1"
      ? 32
      : props.selectedMenu === "Heading 2"
      ? 28
      : props.selectedMenu === "Heading 3"
      ? 22
      : 18,
  fontWeight:
    props.selectedMenu === "Heading 1"
      ? 800
      : props.selectedMenu === "Heading 2"
      ? 700
      : props.selectedMenu === "Heading 3"
      ? 600
      : 0,
  // padding: 4,
  border: "none",
  outline: "none",
  // wordBreak: "break-all",
  wordWrap: "break-word",
  textOverflow: "clip",
}));

export const BulletIcon = styled("div")(() => ({
  fontSize: 30,
  padding: "7px 0 12px 7px",
  // textAlign: "center",
}));
