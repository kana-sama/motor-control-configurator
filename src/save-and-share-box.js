// @flow

import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "./button";
import { TextInput } from "./text-input";
import { Label, LabelText } from "./label";

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

  get isNameFetching(): boolean {
    return this.state.status === "FETCHING";
  }

  get isNameChanged(): boolean {
    return this.state.status === "CHANGED";
  }

  get isNameSaving(): boolean {
    return this.state.status === "SAVING";
  }

  get isNameLoading(): boolean {
    return this.isNameSaving || this.isNameFetching;
  }

  get saveButtonText(): ?string {
    switch (this.state.status) {
      case "FETCHING":
        return "Fetching...";
      case "IDLE":
        return "Saved";
      case "CHANGED":
        return "Save";
      case "SAVING":
        return "Saving...";
    }
  }

  handleNameChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value, status: "CHANGED" });
  };

  handleSaveFormSubmit = () => {
    this.sendName();
  };

  render() {
    return (
      <Wrapper>
        <SaveForm>
          <Field>
            <Label>
              <LabelText>Configuration Name</LabelText>
              <TextInput
                value={this.isNameLoading ? "Loading..." : this.state.name}
                disabled={this.isNameLoading}
                onChange={this.handleNameChange}
              />
            </Label>
          </Field>
          <Field>
            <Button
              disabled={!this.isNameChanged}
              onClick={this.handleSaveFormSubmit}
            >
              {this.saveButtonText}
            </Button>
          </Field>
        </SaveForm>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: fit-content;

  border: 1px solid #dcdcdc;

  padding: 10px;
`;

const Field = styled.div`
  margin: 6px;

  ${Button}, ${TextInput}, ${Label} {
    width: 100%;
    max-width: 100%;

    box-sizing: border-box;
  }
`;

const SaveForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
`;
