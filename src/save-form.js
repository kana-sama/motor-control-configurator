import React from "react";
import styled from "styled-components";

import { Button } from "./button";
import { Label, LabelText } from "./label";
import { TextInput } from "./text-input";

type Props = {
  name: string,
  onNameChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  isNameDisabled: boolean,
  saveButtonText: string,
  isSaveDisabled: boolean,
  onSave: () => void
};

export const SaveForm = ({
  name,
  onNameChange,
  isNameDisabled,
  saveButtonText,
  isSaveDisabled,
  onSave
}: Props) => (
  <SaveFormWrapper>
    <Field>
      <Label>
        <LabelText>Configuration Name</LabelText>
        <TextInput
          value={name}
          disabled={isNameDisabled}
          onChange={onNameChange}
        />
      </Label>
    </Field>
    <Field>
      <Button disabled={isSaveDisabled} onClick={onSave}>
        {saveButtonText}
      </Button>
    </Field>
  </SaveFormWrapper>
);

SaveForm.defaultProps = {
  isNameDisabled: false,
  isSaveDisabled: false
};

const Field = styled.div`
  margin: 6px;

  ${Button}, ${TextInput}, ${Label} {
    width: 100%;
    max-width: 100%;

    box-sizing: border-box;
  }
`;

const SaveFormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
`;
