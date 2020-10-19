import React, { Component } from "react";
import "./style.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aticles: ["Mi primer Componente React", "Introduccion a React", "React"]
    };
  }
  render() {
    return (
      <div>
        {this.state.aticles.map(title => {
          return <p>{title}</p>;
        })}
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <Blog />
    </div>
  );
}
