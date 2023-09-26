import { css } from "@emotion/react";
import { FC, useEffect, useState } from "react";
import { AcceptsEmotion } from "../const.ts";
import { findPeople, Person } from "../functions/filterPeople.ts";
import { PersonDot } from "./PersonDot.tsx";
import { matchResults } from "../functions/matchResults.ts";

type Props = {
  type: string;
} & AcceptsEmotion;

export const PersonalityPanel: FC<Props> = ({ css, className, type }) => {
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    setPeople(findPeople(type));
  }, [type]);
  return (
    <div css={[personalityPanel, css]} className={className}>
      <div css={typeLabel}>{type}</div>
      <div css={candidateList}>
        {matchResults(type).map(({ key, label }) => (
          <span key={key}>
            [{key}/{label}]
          </span>
        ))}
      </div>
      <div css={peopleList}>
        {people.map((p) => (
          <PersonDot {...p} key={p.name} />
        ))}
      </div>
    </div>
  );
};

const personalityPanel = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const typeLabel = css`
  font-size: 36px;
  font-weight: 700;
  color: #333333;
`;
const candidateList = css`
  font-size: 13px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 10px 0 20px;
`;

const peopleList = css`
  display: grid;
  grid-template-columns: repeat(10, auto);
  width: 100px;
  gap: 8px 4px;
`;
