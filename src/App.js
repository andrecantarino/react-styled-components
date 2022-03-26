import styled from "styled-components/macro";
import GlobalStyles from "./global-styles";
import  { HipsterButton } from './components/Buttons';

function App() {
  return (
    <div style={{padding: "2rem"}}>
      <GlobalStyles />
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton as="a" href="https://www.johnsmilga.com/" css={`color: green`}>Click me</HipsterButton>
      <HipsterButton>Click me</HipsterButton>
      <div css={`color: green`}>
        <h2>hello world</h2>
      </div>
    </div>
  );
}

export default App;
