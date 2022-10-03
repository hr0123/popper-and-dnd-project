import styled from "@emotion/styled";

export const Wrapper = styled("div")(() => ({
  width: "100%",
}));

export const Box = styled("div")(() => ({
  width: 300,
  height: 350,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "none",
  borderRadius: 5,
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);",
  padding: 16,
  margin: 4,
}));

export const Row = styled("div")(() => ({
  padding: 8,
  // width: "100%",
  height: 45,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "lightgray",
    cursor: "pointer",
  },
}));

export const ContentWrapper = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
}));

export const Title = styled("div")(() => ({
  fontSize: 16,
  fontWeight: 500,
}));

export const Subtitle = styled("div")(() => ({
  fontSize: 14,
  color: "gray",
}));
