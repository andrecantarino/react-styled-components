import { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-styles";

const LightMode = {
  color: '#222',
  background: '#fff',
};

const DarkTheme = {
  color: '#fff',
  background: '#222',
}

const ContentTheme = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`

function App() {
  const [baseTheme, setTheme] = useState(true);
  const toggleTheme = () => setTheme(!baseTheme);

  return (
    <ThemeProvider theme={baseTheme ? LightMode : DarkTheme}>
      <GlobalStyles />
      <ContentTheme>
        <h1>Hello World</h1>
        <button className="btn" onClick={toggleTheme}>toggle me</button>
      </ContentTheme>
    </ThemeProvider>
  );
}

export default App;
