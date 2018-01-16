// @flow

import styled from "styled-components";
import * as normalized from "normalized-styled-components";
import { placeholder, rgb } from "polished";

export const TextInput = styled(normalized.Input)`
  background: white;

  border: 1px solid #e5e5e5;

  padding: 10px 12px;

  color: #333;

  :disabled {
    color: #888;
  }

  ${placeholder({
    color: "#727478"
  })};
`;
