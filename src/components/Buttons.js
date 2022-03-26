import styled, { css } from "styled-components/macro";
import { Button } from "@material-ui/core";

export const DefaultButton = styled.button`
  background: var(--primary);
  color: #fff;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  display: block;
  margin: 1rem auto;
  width: 200px;
  ${({ large }) => large ? css`
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  `: css`
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  `}
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