import { SelectPane } from "./components/SelectPane.tsx";
import { StatsCanvas } from "./components/StatsCanvas.tsx";
import "../src/App.css";
import { css } from "@emotion/react";

function App() {
  return (
    <div css={wrapper}>
      <StatsCanvas />
      <SelectPane />
    </div>
  );
}

const wrapper = css`
  padding: 20px;
  display: grid;
  grid-template-columns: auto 20%;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export default App;
