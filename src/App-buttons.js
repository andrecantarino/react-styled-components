import styled from "styled-components";
import GlobalStyles from "./global-styles";
import  { HipsterButton } from './components/Buttons';

function App() {
  return (
    <div style={{padding: "2rem"}}>
      <GlobalStyles />
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton as="a" href="https://www.johnsmilga.com/">Click me</HipsterButton>
      <HipsterButton>Click me</HipsterButton>
    </div>
  );
}

export default App;
