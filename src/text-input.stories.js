// @flow

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { TextInput } from "./text-input";

storiesOf("TextInput", module)
  .add("empty", () => <TextInput value="" onChange={action("onChange")} />)
  .add("empty with placeholder", () => (
    <TextInput
      value=""
      placeholder="some placeholder "
      onChange={action("onChange")}
    />
  ))
  .add("with text", () => (
    <TextInput value="hello world" onChange={action("onChange")} />
  ))
  .add("disabled", () => (
    <TextInput value="disabled" disabled onChange={action("onChange")} />
  ))
  .add("disabled with placeholder", () => (
    <TextInput
      value=""
      placeholder="disabled (placeholder)"
      onChange={action("onChange")}
      disabled
    />
  ));
