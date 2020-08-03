import React, { Component } from "react";
import { Header } from "./Layout/Header";

export class Main extends Component<{}> {
  render() {
    return (
      <div>
        <Header title="KBLSN" />
        <div>
          <p>Welcome to KBLSN Sports Network!</p>
        </div>
      </div>
    );
  }
}
