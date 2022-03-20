import styled from "styled-components";
import GlobalStyles from "./global-styles";
import Loading from "./components/Loading";

function App() {
  return (
    <div styles={{padding: "2rem"}}>
      <GlobalStyles />
      <Loading />
    </div>
  );
}

export default App;
