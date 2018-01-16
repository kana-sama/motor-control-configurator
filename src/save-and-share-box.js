// @flow

import React, { Component } from "react";
import styled from "styled-components";

import { SaveForm } from "./save-form";

function delay(duration = 200) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

async function getName(): Promise<string> {
  await delay();

  const name = localStorage.getItem("@name");

  if (name != null) {
    return name;
  } else {
    return await setName("My configuration");
  }
}

async function setName(newName: string): Promise<string> {
  await delay();

  localStorage.setItem("@name", newName);

  return newName;
}

type Props = {};

type Status = "FETCHING" | "IDLE" | "CHANGED" | "SAVING";

type State = {
  name: string,
  status: Status
};

export class SaveAndShareBox extends Component<Props, State> {
  state = {
    name: "",
    status: "FETCHING"
  };

  componentDidMount() {
    this.fetchName();
  }

  async fetchName() {
    this.setState({ status: "FETCHING" });
    const name = await getName();
    this.setState({ status: "IDLE", name });
  }

  async sendName() {
    this.setState({ status: "SAVING" });
    const name = await setName(this.state.name);
    this.setState({ status: "IDLE", name });
  }

  handleNameChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value, status: "CHANGED" });
  };

  handleSaveFormSubmit = () => {
    this.sendName();
  };

  renderSaveForm() {
    const defaultProps = {
      name: this.state.name,
      onNameChange: this.handleNameChange,
      onSave: this.handleSaveFormSubmit
    };

    switch (this.state.status) {
      case "FETCHING":
        return (
          <SaveForm
            {...defaultProps}
            saveButtonText="Loading..."
            name="Loading..."
            isNameDisabled
            isSaveDisabled
          />
        );

      case "IDLE":
        return (
          <SaveForm {...defaultProps} saveButtonText="Saved" isSaveDisabled />
        );

      case "CHANGED":
        return <SaveForm {...defaultProps} saveButtonText="Save" />;

      case "SAVING":
        return (
          <SaveForm
            {...defaultProps}
            saveButtonText="Saving..."
            isNameDisabled
            isSaveDisabled
          />
        );
    }
  }

  render() {
    return <Wrapper>{this.renderSaveForm()}</Wrapper>;
  }
}

const Wrapper = styled.div`
  width: fit-content;

  border: 1px solid #dcdcdc;

  padding: 10px;
`;
