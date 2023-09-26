import { FC } from "react";
import { Person } from "../functions/filterPeople.ts";
import { css } from "@emotion/react";
import { Tooltip, Zoom } from "@mui/material";

type Props = {} & Person;

export const PersonDot: FC<Props> = ({ name, type, typeLabel }) => {
  return (
    <div css={wrapper}>
      <Tooltip title={`${name} / ${type} / ${typeLabel}`} arrow={true} TransitionComponent={Zoom}>
        <div css={dot} />
      </Tooltip>
    </div>
  );
};

const wrapper = css``;

const dot = css`
  //width: 20px;
  //height: 20px;
  width: min(1vw, 20px);
  aspect-ratio: 1 / 1;
  background-color: #85e7dd;
  border-radius: 100%;
  cursor: pointer;
`;
