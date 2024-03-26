import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { gray } from "../../constants/color";

export const VisuallyHiddden = styled("input")({
  border: "0",
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  padding: 0,
  position: "absolute",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: 1,
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  paddinf: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: ${gray};
  margin-left: 2rem;
`;
export const SearchField = styled("input")`
  padding: 1rem 2rem;
  width: 20vmax;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: ${gray};
  font-size: 1.1rem;
`;

export const CurveButton = styled("button")`
padding:1rem 2rem;
border-radius:1.5rem;
outline:none;
color:white;
border :none;
cursor:pointer;
background-color:black;
font-size:1.1rem
&:hover{
  backgound-color:rgba(0,0,0,0.8)
}
`;
