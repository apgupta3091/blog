import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Divider, Row, Col, Grid } from "antd";
import { MailOutlined, GithubOutlined } from "@ant-design/icons";
const projects = [
  {
    name: "Django To-Do list",
    github: "https://github.com/apgupta3091/ToDoList",
    description:
      "A web app using CSS3, HTML5, Python3, Django, and Bootstrap. Allows users to input events to a table, edit them, cross them off, uncross them, and delete them.",
  },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Anuj Gupta</h2>
        <Row style={{ marginTop: "-20px" }}>
          <a
            className="App-link"
            href="mailto:apgupta@syr.edu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "10px" }}
          >
            <MailOutlined />
          </a>
          <a
            className="App-link"
            href="https://github.com/apgupta3091"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "10px" }}
          >
            <GithubOutlined />
          </a>
        </Row>
        <Divider />
        <h2>Projects</h2>
        {projects.map((project) => (
          <div>
            <a
              className="App-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "10px" }}
            >
              {project.name}
            </a>
            - {project.description}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
