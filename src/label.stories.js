// @flow

import React from "react";

import { storiesOf } from "@storybook/react";

import { Label, LabelText } from "./label";
import { TextInput } from "./text-input";

storiesOf("Label", module)
  .add("just label", () => <Label>Label</Label>)
  .add("with input", () => (
    <Label>
      <LabelText>Label</LabelText>
      <TextInput />
    </Label>
  ));
