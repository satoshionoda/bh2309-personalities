import { FC, useEffect, useState } from "react";
import { useSelectedDimensionsState } from "../states/selectedDimensions.ts";
import { parseTypes } from "../functions/parseTypes.ts";
import { css } from "@emotion/react";
import { PersonalityPanel } from "./PersonalityPanel.tsx";

type Props = {};

export const StatsCanvas: FC<Props> = ({}) => {
  const selected = useSelectedDimensionsState();
  const [types, setTypes] = useState<string[]>([]);
  useEffect(() => {
    if (!selected) return;
    setTypes(parseTypes(selected));
  }, [selected]);
  return (
    <div css={[wrapper, getGridTemplateColumns(selected.length)]}>
      {types.map((type) => (
        <PersonalityPanel type={type} key={type} />
      ))}
    </div>
  );
};

const wrapper = css`
  display: grid;
  height: 100%;
  border: 1px solid #ddd;
`;
const getGridTemplateColumns = (length: number) => {
  switch (length) {
    case 1:
      return d1;
    case 2:
      return d2;
    case 3:
      return d3;
    case 4:
      return d4;
    default:
      "";
  }
};
const d1 = css`
  grid-template-columns: repeat(2, 1fr);
  & > div:nth-of-type(odd) {
    background-color: #f0f0f0;
  }
`;
const d2 = css`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  & > div:nth-of-type(4n + 1),
  & > div:nth-of-type(4n) {
    background-color: #f0f0f0;
  }
`;
const d3 = css`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  & > div:nth-of-type(8n + 1),
  & > div:nth-of-type(8n + 3),
  & > div:nth-of-type(8n + 6),
  & > div:nth-of-type(8n) {
    background-color: #f0f0f0;
  }
`;
const d4 = css`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  & > div:nth-of-type(8n + 1),
  & > div:nth-of-type(8n + 3),
  & > div:nth-of-type(8n + 6),
  & > div:nth-of-type(8n) {
    background-color: #f0f0f0;
  }
`;
