import React from "react";
import Weather from "./components/Weather";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <Weather />
    </AppWrapper>
  );
}
export default App;
