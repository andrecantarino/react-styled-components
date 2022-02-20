import styled from "styled-components";
import { Button } from "@material-ui/core";

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
`
export const StyledMaterialButton = styled(Button)`
  text-transform: capitalize;
  background-color: red;
`