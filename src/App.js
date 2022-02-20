import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import { Button } from "@material-ui/core";
import { DefaultButton, HipsterButton, StyledMaterialButton } from "./components/Buttons";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>Basic Title</BasicTitle>
      <BasicTitle special>Basic Title special</BasicTitle>
      <DefaultButton>Default button</DefaultButton>
      <HipsterButton>Hipster button</HipsterButton>
      <Button color='primary' variant='contained'>Material button</Button>
      <StyledMaterialButton color='primary' variant='contained'>Styled Material button</StyledMaterialButton>
    </div>
  );
}

export default App;
