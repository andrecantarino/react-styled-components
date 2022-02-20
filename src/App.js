import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>Basic Title</BasicTitle>
      <BasicTitle special>Basic Title special</BasicTitle>
      <DefaultButton>Default button</DefaultButton>
      <HipsterButton>Hipster button</HipsterButton>
    </div>
  );
}

export default App;
