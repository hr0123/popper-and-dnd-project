import styled from "@emotion/styled";

export const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const Wrapper = styled("div")(() => ({
  padding: 20,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
