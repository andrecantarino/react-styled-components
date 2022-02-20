import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";
import { Button } from "@material-ui/core";

const StyledBtn = styled(Button)`
  text-transform: capitalize;
`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>Basic Title</BasicTitle>
      <BasicTitle special>Basic Title special</BasicTitle>
      <DefaultButton>Default button</DefaultButton>
      <HipsterButton>Hipster button</HipsterButton>
      <Button color='primary' variant='contained'>Material button</Button>
      <StyledBtn color='primary' variant='contained'>Styled Material button</StyledBtn>
    </div>
  );
}

export default App;
