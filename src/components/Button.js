import React, { Component } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

export default class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
      {(color) => 
       <button className={`ui button ${color}`}>
       <LanguageContext.Consumer>
         {(value) => (value === "english" ? "Submit" : "Odoslať")}
       </LanguageContext.Consumer>
     </button> }   
      </ColorContext.Consumer>
    );
  }
}
