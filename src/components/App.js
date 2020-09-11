import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import { UserCreate } from "./UserCreate";

export default class App extends Component {
  state = {
    language: "english",
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag gb"
            onClick={() => this.onLanguageChange("english")}
          ></i>
          <i
            className="flag sk"
            onClick={() => this.onLanguageChange("slovak")}
          ></i>
        </div>
        <LanguageContext.Provider value={this.state.language} >
        <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
