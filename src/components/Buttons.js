import styled from "styled-components/macro";
import { Button } from "@material-ui/core";

export const DefaultButton = styled.button`
  background: var(--primary);
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
  width: 150px;
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`

export const StyledMaterialButton = styled(Button)`
  text-transform: capitalize;
  background-color: red;
`