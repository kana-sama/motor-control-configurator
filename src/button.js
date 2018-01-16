import styled from "styled-components";
import * as normalized from "normalized-styled-components";
import { lighten } from "polished";

const baseBackgroundColor = "#209ad5";

export const Button = styled(normalized.Button)`
  background: ${baseBackgroundColor};

  color: white;
  font-family: sans-serif;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 0.03em;

  border: 0;

  padding: 10px 25px 8px;

  cursor: pointer;

  :hover {
    background-color: ${lighten(0.1, baseBackgroundColor)};
  }

  :disabled {
    background-color: white;

    color: #9b9b9b;

    outline: 1px solid #9b9b9b;
  }
`;
