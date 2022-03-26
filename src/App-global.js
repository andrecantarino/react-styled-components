import styled from "styled-components";
import GlobalStyles from "./global-styles";

const Content = styled.div`
  padding: 2rem;
  margin: auto 0;
`

function App() {
  return (
    <div>
      <GlobalStyles />
      <Content>
        <h1 className="text">Hello World</h1>
        <button className="btn" onClick={() => console.log('click')}>click me</button>
      </Content>
    </div>
  );
}

export default App;
