import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import { Button } from "@material-ui/core";
import { DefaultButton, HipsterButton, StyledMaterialButton } from "./components/Buttons";
import ComplexTitle from "./components/ComplexTitle";
import AlternativeComplexTitle from "./components/AlternativeComplexTitle";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <div>
        <BasicTitle>Basic Title</BasicTitle>
        <BasicTitle special>Basic Title special</BasicTitle>
        <DefaultButton>Default button</DefaultButton>
        <HipsterButton>Hipster button</HipsterButton>
        <Button color='primary' variant='contained'>Material button</Button>
        <StyledMaterialButton color='primary' variant='contained'>Styled Material button</StyledMaterialButton>
      </div>
      <div style={{ padding: '2rem' }}>
        <ComplexTitle title='more complex title'/>
        <AlternativeComplexTitle title='alternative complex title' />
      </div>
    </div>
  );
}

export default App;
