// @flow

import React from "react";
import { render } from "react-dom";

import { App } from "./app";

const appRoot: HTMLDivElement = document.createElement("div");

render(<App />, appRoot);

if (document.body) {
  document.body.appendChild(appRoot);
}