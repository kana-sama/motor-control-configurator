// @flow

import React from "react";
import styled from "styled-components";

import { Button } from "./button";

type Props = {
  value: number,
  onChange: number => *
};

export const Counter = ({ value, onChange }: Props) => (
  <Wrapper>
    <Button onClick={() => onChange(value - 1)}>
      <ButtonLabel>-</ButtonLabel>
    </Button>
    <Value>{value}</Value>
    <Button onClick={() => onChange(value + 1)}>
      <ButtonLabel>+</ButtonLabel>
    </Button>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;

  width: fit-content;

  justify-content: center;
  align-items: center;

  margin: 5px;
  padding: 5px;

  border: 1px solid black;
`;

const Value = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const ButtonLabel = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;
