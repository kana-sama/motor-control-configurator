import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withTests } from "./withTests";

import { Button } from "./button";

storiesOf("Button", module)
  .addDecorator(withTests("button"))
  .add("normal", () => <Button onClick={action("clicked")}>Button</Button>)
  .add("disabled", () => (
    <Button disabled onClick={action("clicked")}>
      Disabled
    </Button>
  ));
